var MindMapOptions = {
  width:800,
  height:600
};

function setup(){
  createCanvas(MindMapOptions.width, MindMapOptions.height);
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
    throw 'Prea multe argumente pentru invokeDrawFunction: ' + args.length + '!');
  }
}

function draw(){
  invokeDrawFunction(['ellipse',50,50,80,80]);
}
