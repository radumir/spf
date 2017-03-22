var MindMapOptions = {
  width:800,
  height:600
};

function setup(){
  createCanvas(MindMapOptions.width, MindMapOptions.height);
}

function invokeDrawFunction( args ) {
  var fName = args[0];
  window[fName](args[1],args[2],args[3],args[4]);
}

function draw(){
  invokeDrawFunction(['ellipse',50,50,80,80]);
}
