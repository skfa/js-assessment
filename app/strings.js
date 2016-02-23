exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
   return _.flatten(_.uniq(str.split('').sort()).map(function (e) {
     var ct = 0, temp = [];
     while(ct < amount){
       temp.push(e);
       ct++;
     }
     return temp;
   })).join('');
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
   var rev= [], arr = str.split('');
    while(arr.length >0){
      rev.push(arr.pop());
    }
    return rev.join('');
  }
};
