var assert = require('assert');
var cond = require('./COND');
describe('cond', function() {
  it('will evaluate a list of expressions to a single result', function() {
    assert( cond( true, 1, false, 2, false, 3, 4) === 1 ) 
    assert( cond( false, 1, true, 2, false, 3, 4) === 2 ) 
    assert( cond( false, 1, false, 2, true, 3, 4) === 3 ) 
    assert( cond( false, 1, false, 2, false, 3, 4) === 4 ) 
  });
});
