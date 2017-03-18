function ec_grad2(a,b,c) {
  if( a == 0 ) {
    if( b == 0 ) {
      if( c == 0 ) {
        return "ecuatie nedeterminata!";
      } else {
        return "ecuatie imposibila!";
      }
    } else {
      return -c/b;
    }
  } else {
    var delta = b*b - 4*a*c;
    if( delta == 0 ) {
      return -b/(2*a);
    } else if( delta > 0 ) {
      var x1 = (-b - Math.sqrt( delta ))/(2*a);
      var x2 = (-b + Math.sqrt( delta ))/(2*a);
      return [x1,x2];
    }
  }
}
