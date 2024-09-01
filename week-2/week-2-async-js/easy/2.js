let ctr =1;
function myCounter(){
    console.clear();   
    console.log(ctr);
    ctr++;
    setTimeout  (myCounter,1000);
    }
    setTimeout(myCounter,1000);