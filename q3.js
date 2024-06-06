const array = [1, 2, 3, 2, 4, 5, 4, 5];
// const elementTracker = {};
// const duplicates = [];


function checkDuplicate (array){
  let arr=[]
  for(let i=0;i<array.length;i++){
   
    // if(!arr.includes(array[i])){
    //    arr.push(array[i])
    // }
// array
// array
    if(arr.indexOf(array[i])=== -1 ){
      arr.push(array[i])
   }
  }
  return arr
}
// checkDuplicate(array)

console.log(checkDuplicate(array)); 


