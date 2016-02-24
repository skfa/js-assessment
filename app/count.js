exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
      console.log(start++);

      var int= setInterval(function () {
          if(start <= end){
              console.log(start);
              start++;

          }
          else{
              clearInterval(int)
          }
      }, 100);
      return {
        cancel: function () {
          clearInterval(int);
        }
      }
  }
};
