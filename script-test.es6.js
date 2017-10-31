import {romanToArabic} from 'script.js';
import {assert} from 'chai';

describe("Roman numbers", function() {

  it("should return 1 for I", function() {
    assert.equal(romanToArabic('I'), 1);
  });

  it("should return 1234 MCCXXXIV", function() {
    assert.equal(romanToArabic('MCCXXXIV'), 1234);
  });
  
  it("should return 3167 MMMCLXVII", function() {
    assert.equal(romanToArabic('MMMCLXVII'), 3167);
  });
  
  it("should return 784 DCCLXXXIV", function() {
    assert.equal(romanToArabic('DCCLXXXIV'), 784);
  });
  
  it("should return 1178 MCLXXVIII", function() {
    assert.equal(romanToArabic('MCLXXVIII'), 1178);
  });

});
