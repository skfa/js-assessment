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
    Array.prototype.splice.call(arguments, 0,1)
    return fn.apply(null, arguments);
  },

  partialUsingArguments : function(fn) {
    Array.prototype.splice.call(arguments,0,1);
    var that_arg = arguments;
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
