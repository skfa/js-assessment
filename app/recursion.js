exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var _fileList = [], allFile = false;
    if(!dirName){
      allFile = true;
    }
    function getFiles(fileArray, dir, allFlag){
        fileArray.forEach(function (e) {
          if (typeof(e) === 'string') {
            if(allFlag){
              _fileList.push(e);
            }
          }
          else {
            if(allFlag || (e.dir === dirName)){
              getFiles(e.files, e.dir, true);
            }

          }
        });
     }
    getFiles(data.files,data.dir, allFile);
    return _fileList;
  },

  permute: function(arr) {
    var arr1 = JSON.parse(JSON.stringify(arr)), op = [];
    function getKey(ar){
      return ar.reduce(function (c,p) {
        return c+','+p;
      },'');
    }
    function isPresent(op, key){
      return op.filter(function (e) {
        return e.key === key;
      }).length;
    }
    for(var i=0;i<arr1.length;i++) {
      //var arr1 = JSON.parse(JSON.stringify(arr));
      for (var j = arr1.length -1; j <=0 ; j--) {

        var temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
        //if (!isPresent(op, getKey(arr1))) {
          op.push({val: arr1, key: getKey(arr1)});
        //}

      }
    }
      return op.map(function(e){ return e.val;});

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
