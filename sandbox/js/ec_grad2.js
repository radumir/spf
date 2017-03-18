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
  }
}
