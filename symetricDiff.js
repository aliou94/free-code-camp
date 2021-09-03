// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference


function sym() {

    let args  = []

    for(let i=0; i<arguments.length;i++){
        args.push(arguments[i])
    }


let symDiff = (arrayOne, arrayTwo)=>{

    let result = []
       
    arrayOne.forEach(element => {
     if(arrayTwo.indexOf(element)<0 && result.indexOf(element)<0){
         result.push(element)
     }
    });

    arrayTwo.forEach((element)=>{
        if(arrayOne.indexOf(element)<0 && arrayOne.indexOf(element)<0){
            result.push(element)
        }
    })

   return result
  
}



return args.reduce(symDiff)



  }
  
console.log( sym([1, 2, 3], [5, 2, 1, 4]))