var romanNumbers = require("../lib/romanNumbers")();

describe('romanNumbers-js-kata', function(){

  it('should have I when one passed', function() {
    var result = romanNumbers.convertToRoman(1);
    expect(result).toBe('I');
  });
});
