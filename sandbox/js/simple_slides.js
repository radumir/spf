var slideGc = {titleLeft:20*factorScalare,titleTop:10*factorScalare,titleBottom:40*factorScalare,
  slideWidth:800*factorScalare, slideHeight:600*factorScalare,
  slideBorderWidth:2*factorScalare, slideBorderColor:0,
  outerBorder:20*factorScalare, outerRadius:10*factorScalare,
  slidePadding:20*factorScalare};

function slide( node, gc = slideGc ) {
  var out = [];
  
  function conturSlide() {
    stroke(gc.slideBorderWidth);
    color(gc.slideBorderColor);
    var x0 = gc.outerBorder;
    var y0 = gc.outerBorder;
    var w = gc.slideWidth - 2*gc.outerBorder;
    var h = gc.slideHeight - 2*gc.outerBorder;
    out.push(['rect',x0,y0,w,h,gc.outerRadius]);
  }

  function title() {
    var gc = nodeGraphicContext(slideGc,0);
    out.push(['textFont',gc.font]);
    out.push(['textSize',gc.fontSize]);
    
    out.push(['push']);
    out.push(['translate',gc.outerBorder+gc.slidePadding,gc.outerBorder+gc.slidePadding]);
    out.push(['text',node.text,gc.titleLeft,gc.titleTop+gc.lineHeight]);
    
    out.push(['push']);
    out.push(['translate',0,gc.fontSize]);
    out.push(['line',0,0,gc.slideWidth-2*(gc.outerBorder+gc.slidePadding),0]);
    out.push(['pop']);
    
    out.push(['pop']);
  }

  function content() {
    var gcLevel1 = nodeGraphicContext( slideGc, 1 );

    function findWidths() {
      var widths = [];
      textFont( gcLevel1.font );
      textSize( gcLevel1.fontSize );
      
      var c2 = JSON.parse(JSON.stringify( node.content ));
      while( c2.length > 0 ) {
        var node2 = c2.pop();
        widths.push( textWidth( node2.text ) + 2*gcLevel1.padding);        
      }
      
      return widths;
    }
  
    var w = findWidths();
    var margin = slideGc.outerBorder+slideGc.slidePadding; 

    function interleaveSpace() {
      var usedSpace = 0;
      for(var i=0;i<w.length;i++) {
        usedSpace += w[i];
      }
      return (slideGc.slideWidth 
        - 2*margin
        - usedSpace)/(w.length-1);
    }

    var freeSpace = interleaveSpace();

    function xOffsetLevel1( idx ) {
      var offset = 0;
      for( var i =0; i<idx; i++ ) {
        offset += freeSpace;
        offset += w[i];
      }
      return offset + w[idx]/2;
    }

    var c2 = JSON.parse(JSON.stringify( node.content ));
    var L1idx = 0;
    gcLevel1.y = 0;
    
    out.push(['push']);
    out.push(['translate',margin,slideGc.slideHeight/2]);
    while(c2.length > 0) {
      gcLevel1.x = xOffsetLevel1( L1idx++ );

      drawNode( c2.pop(), gcLevel1, out );
    }
    out.push(['pop']);
  }
  
  conturSlide();
  title();
  content();
  
  console.log(JSON.stringify(out));
  return out;
}
