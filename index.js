// Add your functions here


const map = function(arr, callback){
    let newArr = []

    for(let i=0; i < arr.length; i++){
        newArr.push(callback(arr[i]))
    }
    return newArr
}
function reduce(arr, callback, starting){
    let target = (!!starting) ? starting : arr[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < arr.length; i++) {
        console.log(arr[i], i)
        target = callback(arr[i], target)
    }
  
    return target;
  }