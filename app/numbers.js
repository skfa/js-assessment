exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      var bin = (num >>> 0).toString(2).split('');
      return parseInt(bin[bin.length - bit]);

  },

  base10: function(str) {
     return parseInt(str, 2);
  },

  convertToBinary: function(num) {
     var bin = (num >>> 0).toString(2), gap = (8 - bin.length), prefix = '';
      if(gap >0){
          for(var i =0; i<gap;i++){
              prefix = prefix +'0';
          }
      }
      return prefix+bin;
  },

  multiply: function(a, b) {
      var pr = b.toString().split('.')[1].length;
    return parseFloat((a*b).toPrecision(pr));
  }
};
