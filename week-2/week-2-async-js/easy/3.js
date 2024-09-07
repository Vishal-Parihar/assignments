const fs = require("fs");
function readFileAsync(){
    return new Promise(function(resolve,reject){
        fs.readFile("a.txt","utf-8",function(err,data){
            if(err){
                reject("file not found");
            }
            else{
                resolve(data);
            }
        })
    })
}
readFileAsync()
.then(function(){
    console.log("file read");
    
})
.catch(function(e){
    console.log("error "+e);
    
})

let a =0;                                                   
for(let i=0;i<100000;i++){                                  
    c=+i;                                                    
}                                                             
console.log("Expensive operation done");