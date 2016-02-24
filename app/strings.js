exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
   /*return _.flatten(_.uniq(str.split('').sort()).map(function (e) {
     var ct = 0, temp = [];
     while(ct < amount){
       temp.push(e);
       ct++;
     }
     return temp;
   })).join('');*/
      var trace = null, traceCount = 0;
      return str.split('').filter(function(e){
          if(!trace || trace!=e){
              trace = e;
              traceCount = 1;
              return e;
          }
          else if(trace === e){
              if(traceCount>=amount){
                  return false;
              }
              else{
                  traceCount++;
                  return true;
              }
          }
      }).join('');
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
