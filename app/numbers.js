exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      var bin = (num >>> 0).toString(2).split('');

  },

  base10: function(str) {
     return parseInt(str, 2);
  },

  convertToBinary: function(num) {
     return (num >>> 0).toString(2);
  },

  multiply: function(a, b) {
    return a*b;
  }
};
