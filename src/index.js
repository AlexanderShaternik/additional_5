module.exports = function check(str, bracketsConfig) {
let arr = str.split('');
let open = bracketsConfig[0][0];
let close = bracketsConfig[0][1];
let counterOpen = 0;
let counterClose = 0;
arr.forEach((item) => {
  item == open ? counterOpen++ : counterClose++;
});

 if(counterOpen == counterClose) {
  func(arr);
   function func() {
    arr.forEach((item,i,arr) => { 
      if(arr[0] == open ) {
        if (item == close && arr.length > 1) {
         arr.splice(i, 1);
         arr.splice(0, 1);
         func(arr);
        }
      } else if (arr.length === 0) {
        return true;
      } return false;
    });
    
   };
   return true;
 } return false; 
}











function f(str, bracketsConfig){
let arr = str.split('');
let open = bracketsConfig[0][0];
let close = bracketsConfig[0][1];
let counterOpen = 0;
let counterClose = 0;
arr.forEach((item) => {
  item == open ? counterOpen++ : counterClose++;
});

 if(counterOpen == counterClose) {
  func(arr);
   function func() {
    if(arr[0] == open && arr.length > 1 ) {
          arr.forEach((item,i,arr) => { 
     
           if (item == close) {
           arr.splice(i, 1);
           arr.splice(0, 1);
           func(arr);
            console.log(arr);
           } console.log(3);
          });
          console.log(arr, '4');
      } else if (arr.length == 0) {
        console.log('1');
        return true;
      } console.log('2'); return false;
    
   };
   
 } return false; 
};
// console.log(f('())(', [['(', ')']]));
console.log(f('()', [['(', ')']]));


















// function g(str, bracketsConfig){
//   let arr = str.split('');
//   console.log(arr,arr.length);
  
//   let open = bracketsConfig[0][0];
//   let close = bracketsConfig[0][1];
//   let counterOpen = 0;
//   let counterClose = 0;
//   arr.forEach((item) => {
//     item == open ? counterOpen++ : counterClose++;
//   });
  
//    if(counterOpen != counterClose) {
//     return false;
//    } else {console.log(arr, arr.length);
//     for (i = 0; i < arr.length; i++) { 
      
//         if(arr[0] == open ) {
      
//          if (arr[i] == close) {
//           arr.splice(0, 1);
//           arr.splice(i, 1);
//           console.log('dasdsa');
//          }
//        } else if (arr.length == 0) {
//          return true;
//        } 
//        return false;
//     }
    
//     return true;
//    }
//   };
//   console.log(g('((()))()', [['(', ')']]));