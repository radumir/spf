var MindMapOptions = {
  width:800,
  height:600,
  font:'Helvetica',
  fontSize:[36,24],
  padding:[15,10],
  radius:[20,15],
  yShift:[43,20],
  lineHeight:[10,7],
  outerBorder:20,
  outerRadius:10
};

function setup(){
  createCanvas(MindMapOptions.width, MindMapOptions.height);
  textFont(MindMapOptions.font);
  conturSlide();
  smooth(10);
  noLoop();
}

function conturSlide() {
  stroke(2);
  color(0);
  var x0 = MindMapOptions.outerBorder;
  var y0 = MindMapOptions.outerBorder;
  var w = MindMapOptions.width - 2*MindMapOptions.outerBorder;
  var h = MindMapOptions.height - 2*MindMapOptions.outerBorder;
  rect(x0,y0,w,h,MindMapOptions.outerRadius);
}

function nodeGraphicContext( gc = {}, level = 0 ) {
  gc.font = MindMapOptions.font;
  gc.fontSize = MindMapOptions.fontSize[level];
  gc.padding = MindMapOptions.padding[level];
  gc.lineHeight = MindMapOptions.lineHeight[level];
  gc.radius = MindMapOptions.radius[level];
  gc.yShift = MindMapOptions.yShift[level];
  
  if( !gc.hasOwnProperty('x') ) {
    gc.x = MindMapOptions.width/2;
    gc.y = MindMapOptions.height/2;
  }
  return gc;
}

function drawNode( node, gc, cmmdList = [] ) {
  textFont(gc.font);
  textSize(gc.fontSize);
  
  var nodeTextWidth = textWidth(node.text);
  var nodeWidth = nodeTextWidth + 2*gc.padding;

  var x0 = gc.x - nodeTextWidth/2;
  var y0 = gc.y + gc.lineHeight;
  
  cmmdList.push(['textFont',gc.font]);
  cmmdList.push(['textSize',gc.fontSize]);
  cmmdList.push(['rect',x0-gc.padding,y0-gc.yShift,
    nodeTextWidth+2*gc.padding,gc.fontSize+2*gc.padding,gc.radius,gc.radius]);
  cmmdList.push(['text',node.text,x0,y0]);
  
  return cmmdList;
}

function invokeDrawFunction( args ) {
  var fName = args[0];
  if( args.length == 1 ) {
    window[fName]();
  } else if( args.length == 2 ) {
    window[fName](args[1]);
  } else if( args.length == 3 ) {
    window[fName](args[1],args[2]);
  } else if( args.length == 4 ) {
    window[fName](args[1],args[2],args[3]);
  } else if( args.length == 5 ) {
    window[fName](args[1],args[2],args[3],args[4]);
  } else if( args.length == 6 ) {
    window[fName](args[1],args[2],args[3],args[4],args[5]);
  } else if( args.length == 7 ) {
    window[fName](args[1],args[2],args[3],args[4],args[5],args[6]);
  } else if( args.length == 8 ) {
    window[fName](args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
  } else if( args.length == 9 ) {
    window[fName](args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8]);
  } else {
    throw 'Prea multe argumente pentru invokeDrawFunction: ' + args.length + '!';
  }
}

function draw(){
  var node = mindMap.nodes[0];
  var cmmds = slide( node );
  for( var i=0; i<cmmds.length; i++ ) {
    invokeDrawFunction(cmmds[i]);
  }
}
