exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
   return arr.indexOf(item);
  },

  sum : function(arr) {
       return arr.reduce(function(c,p){ return c+p;},0);
  },

  remove : function(arr, item) {
      return arr.filter(function(e){ return item!==e});
  },

  removeWithoutCopy : function(arr, item) {
    while(arr.indexOf(item)!== -1){
      arr.splice(arr.indexOf(item),1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
   arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0,0,item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return (arr1.join(',') + ','+arr2.join(',')).split(',');
  },

  insert : function(arr, item, index) {
      arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var counter = 0;
      arr.forEach(function (e) {
        if(e === item)
           counter++;
      });
    return counter;
  },

  duplicates : function(arr) {
    var dups = [];
    var arr1 = arr.sort();
    for(var i =0; i<arr1.length; i++){
      if(arr1[i] == arr1[i+1]){
        if(dups.indexOf(arr1[i+1]) < 0){
          dups.push(arr1[i+1]);
          i = i+2;
        }

      }
    }

    return dups;
  },

  square : function(arr) {
    return arr.map(function (e) {
      return e*e;
    });
  },

  findAllOccurrences : function(arr, target) {
    var occ = [];
     arr.forEach(function(e,i){
       if(e === target){
         occ.push(i);
       }

     });
    return occ;
  }
};
