exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var _fileList = [];
    (function getFiles(fileArray, dir){
      if((dir === dirName) || !dirName) {
        fileArray.forEach(function (e) {
          if (typeof(e) === 'string') {
            _fileList.push(e);
          }
          else {
            getFiles(e.files, e.dir);
          }
        });
      }
     })(data.files,data.dir);
    return _fileList;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    var fibnum = [1,1];
     function fib(n){
       if(n == 1 || n== 2){
         return 1;
       }
       else if(fibnum[n+1]){
         return fibnum[n+1]
       }
       else{
         return fib(n-1) + fib(n-2);
       }
     }
    return fib(n);
  },

  validParentheses: function(n) {

  }
};
