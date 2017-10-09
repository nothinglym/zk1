var arr=[1,2,3,2,1];
//ШЅжи
function repeat1(arr){
    var brr=[];
  for(var i=0;i<arr.length;i++){
      if(brr.indexOf(arr[i])==-1){
          brr.push(arr[i]);
      }
  }
    return brr;
}
function repeat2(arr) {
    var crr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; i++) {
            if (arr[i] ==arr[j]) {
                crr.push(arr[j]);
            }
        }
    }
    return crr;
}

