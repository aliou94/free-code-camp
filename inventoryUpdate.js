// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

function updateInventory(arr1, arr2) {

    let currInv = {}
    let updateInv = {}
    let newInv = {}
     let items = []
     let arr = []
    
    arr1.forEach((item)=>{
        currInv[item[1]] = item[0]  
         items.push(item[1])
        })
    
    arr2.forEach((item)=>{
        updateInv[item[1]] = item[0] 
           items.push(item[1])    
        })
    
    items = [...new Set(items)]
    
    items.forEach(
       
        (item, index) => {
             !currInv[item] 
             ? newInv[item] = updateInv[item] 
             : newInv[item] = updateInv[item] + currInv[item]
        
            if(!newInv[item]) newInv[item] = currInv[item]
             
    arr[index] = [newInv[item], item  ]
              
    
        }
    )
    
    arr.sort(function(a, b) {
        if (a[1] > b[1]) {
          return 1;
        }
        if (a[1] < b[1]) {
          return -1;
        }
        return 0;
      });
    
     
        return arr;
    }
    
    // Example inventory lists
    var curInv = [
        [0, "Bowling Ball"],
        [0, "Dirty Sock"],
        [0, "Hair Pin"],
        [0, "Microphone"]
    ];
    
    var newInv = [
        [1, "Hair Pin"],
        [1, "Half-Eaten Apple"],
        [1, "Bowling Ball"],
        [1, "Toothpaste"]
    ];
    
    updateInventory(curInv, newInv);