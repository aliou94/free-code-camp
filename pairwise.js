// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise



function pairwise(arr, arg) {

    let pairIndices = [];
   
   
   
     for (let i = 0; i < arr.length; i++) {
       for (let j = i + 1; j < arr.length; j++) {
         // Exclude pairs that contain previously paired elements
         if (arr[i] + arr[j] == arg
             && !pairIndices.includes(i)
             && !pairIndices.includes(j)) {
           pairIndices.push(i, j);
           break;
         }
       }
     }
   
   
//    console.log(pairIndices)
   
   
    return pairIndices.reduce((acc, item, index) => acc+item, 0)
   
    
   }
   

   pairwise([1, 3, 2, 4], 4)