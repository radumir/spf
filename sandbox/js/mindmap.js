var factorScalare = 2.5;
var MindMapOptions = {
  width:800*factorScalare,
  height:600*factorScalare,
  font:'Helvetica',
  fontSize:[36*factorScalare,24*factorScalare],
  padding:[15*factorScalare,10*factorScalare],
  radius:[20*factorScalare,15*factorScalare],
  yShift:[43*factorScalare,28*factorScalare],
  lineHeight:[10*factorScalare,7*factorScalare],
  outerBorder:20*factorScalare,
  outerRadius:10*factorScalare,
  strokeWidth:2*factorScalare,
  highLightColor:[255,255,0],
  textColor:[0,0,0],
  backgroundColor:[255,255,255]
};
var highLightColor;
var nodeTextColor;
var imageCounter = 0; 
var backImg;

//apelata de p5.js odata inaintea lui draw
function setup(){
  createCanvas(MindMapOptions.width, MindMapOptions.height);
  textFont(MindMapOptions.font);
  highLightColor=color(MindMapOptions.highLightColor[0],MindMapOptions.highLightColor[1],MindMapOptions.highLightColor[2]);
  backgroundColor=color(MindMapOptions.backgroundColor[0],MindMapOptions.backgroundColor[1],MindMapOptions.backgroundColor[2]);
  nodeTextColor=color(MindMapOptions.textColor[0],MindMapOptions.textColor[1],MindMapOptions.textColor[2]);
  smooth(10);
  //noLoop();
  backImg = loadImage('img/back-arrow.png',function(img){
    console.log('-- imagine incarcata');
    imageCounter++;
  });
  noLoop();
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

mindMap.nodeKey = 'n1';

//functie invocata de p5.js in care se face efectiv desenarea
function draw(){
  if(imageCounter < 1 ) {
    setTimeout( draw, 1000 );
    return;
  }
  
  var node = mindMap.nodes[mindMap.nodeKey];
  var cmmds = slide( node );
  for( var i=0; i<cmmds.length; i++ ) {
    invokeDrawFunction(cmmds[i]);
  }
  image(backImg,100,100);
}

var isLooping = true;

function keyPressed() {
  if( isLooping ) {
    noLoop();
  } else {
    loop();
  }
  isLooping = !isLooping;
  return false;
}

function mouseClicked() {
  if (mindMap.hasOwnProperty('highLightedNode') ) {
    mindMap.nodeKey = mindMap.highLightedNode;
    delete(mindMap.highLightedNode);
  }
  return false;
}
