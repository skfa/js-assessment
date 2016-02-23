exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals : function() {
    var myObject = {
      name : 'Jory'
    };

    return myObject;
  },

  functions : function(flag) {

    function getValue(fl) { if(fl){return 'a';}else{return 'b';} }
    return getValue(flag);
  },

  parseInt : function(num) {
    if(num.indexOf('0x') >=0){
      return 0;
    }
    return parseInt(num);
  },

  identity : function(val1, val2) {
     return val1 === val2;
  }
};
