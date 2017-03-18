QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("ecuatie nedeterminata", function(assert){
  assert.ok( ec_grad2(0,0,0) == "ecuatie nedeterminata!", "Caz ecuatie nedeterminata a esuat");
});

QUnit.test("ecuatie imposibila", function(assert){
  assert.ok( ec_grad2(0,0,12) == "ecuatie imposibila!", "Test de ecuatie imposibila esuat");
});

QUnit.test("ecuatie grad 1", function(assert){
  assert.equal( ec_grad2(0,5,10), -2);
});

QUnit.test("ecuatie de grad 2 cu o singura solutie", function(assert){
  assert.equal( ec_grad2(1,2,1), -1);
});

QUnit.test("ecuatie de grad 2 cu doua solutii", function(assert){
  var result = ec_grad2(1,-3,2);
  assert.equal( result[0], 1 );
  assert.equal( result[1], 2 );
  //java: int a[] = {1,2};
});
