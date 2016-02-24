exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
   return !!str.match(/[0-9]/);
  },

  containsRepeatingLetter : function(str) {
     return !!str.match(/([a-zA-Z])\1/i);
  },

  endsWithVowel : function(str) {
    return !!str.match(/[aeiouAEIOU]$/i);
  },

  captureThreeNumbers : function(str) {
    var n = str.match(/([0-9]){3}/);
    if(n && n.length>0){
      return n[0]
    }
    return false;
  },

  matchesPattern : function(str) {
    return !!str.match(/^\d{3}-\d{3}-\d{4}$/);
  },
  isUSD : function(str) {
     //return !!str.match(/^\$[1-9]{1}[0-9]{0,2}(\,|\d{3})*(\.\d{0,2})*(1-9){1}$/);
    return !!str.match(/^\$(?:0|[1-9]\d{0,2}(?:,?\d{3})*)(?:\.\d{2})?$/)
  }
};
