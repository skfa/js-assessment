exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {

      var int= setInterval(function () {if(start < end){start++;}else{ clearInterval(int)}}, 100);
      return {
        cancel: function () {
          clearInterval(int);
        }
      }
  }
};
