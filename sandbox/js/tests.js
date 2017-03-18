QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("ecuatie nedeterminata", function(assert){
  assert.ok( ec_grad2(0,0,0) == "ecuatie nedeterminata!", "Passed!");
});
