var slideGc = {titleLeft:20,titleTop:10,titleBottom:40,
  slideWidth:800, slideHeight:600,
  slideBorderWidth:2, slideBorderColor:0,
  outerBorder:20, outerRadius:10,
  slidePadding:20};

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
  
  conturSlide();
  title();
  
  return out;
}
