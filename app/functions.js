exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
     return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
     return fn.apply(obj);
  },

  functionFunction : function(str) {
    var str = str || '';
    return function (p) {
      return str +', '+p;
    }
  },

  makeClosures : function(arr, fn) {
     return arr.map(function(e){
       return function(){
         return fn.call(null,e);
       }
     });
  },

  partial : function(fn, str1, str2) {
        return function (pct){
          return fn.call(null,str1, str2, pct);
        }
  },

  useArguments : function() {
    return Array.prototype.reduce.call(arguments,function (c,p) {
      return c+p;
    },0);
  },

  callIt : function(fn) {
    var temp = [];
   for(var i=1;i<arguments.length;i++){
     temp.push(arguments[i]);
   }

    return fn.apply(null, temp);
  },

  partialUsingArguments : function(fn) {

    var that_arg = [];
    for(var i=1;i<arguments.length;i++){
      that_arg.push(arguments[i]);
    }
      return function () {
        Array.prototype.forEach.call(arguments, function (e) {
          that_arg.push(e);
        })
        return fn.apply(null, that_arg);
      }
  },

  curryIt : function(fn) {
     return function (a) {
       return function (b){
         return function (c){
           return fn.call(null, a,b,c);
         }
       }
     }
  }
};
