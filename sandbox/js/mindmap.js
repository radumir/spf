var MindMapOptions = {
  width:800,
  height:600,
  font:'Helvetica',
  fontSize:[36],
  padding:[15],
  outerBorder:20,
  outerRadius:10
};

function setup(){
  createCanvas(MindMapOptions.width, MindMapOptions.height);
  textFont(MindMapOptions.font);
  conturSlide();
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


function drawNode( node, level = 0 ) {
  var cmmdList = [];
  
  var gc = {};
  gc.font = MindMapOptions.font;
  gc.fontSize = MindMapOptions.fontSize[level];
  gc.padding = MindMapOptions.padding[level];
  
  if( !node.hasOwnProperty('x') ) {
    node.x = MindMapOptions.width/2;
    node.y = MindMapOptions.height/2;
  }
  textFont(gc.font);
  textSize(gc.fontSize);
  var nodeTextWidth = textWidth(node.text);
  var nodeWidth = nodeTextWidth + 2*gc.padding;
  var x0 = node.x - nodeWidth/2;
  var y0 = node.y - gc.fontSize/2;
  
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
  var cmmds = drawNode( mindMap.slides[0].nodes[0] );
  for( var i=0; i<cmmds.length; i++ ) {
    invokeDrawFunction(cmmds[i]);
  }
}
