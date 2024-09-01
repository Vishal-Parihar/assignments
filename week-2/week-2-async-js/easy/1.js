let ctr =1;
function myCounter(){
    console.clear();   //prints only current vlaue
    console.log(ctr);
    ctr++;
    }
    setInterval(myCounter,1000);