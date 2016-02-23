exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
     return {
       then: function (fn) {
         return fn.call(null, value);
       }
     }
  },

  manipulateRemoteData : function(url) {

  }
};
