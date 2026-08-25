console.log("This is second.js file")

function sum(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}


// module.exports is empty object

// module.exports={sum, sub};    //when key:value pairs are sum then  
// module.exports={sum:sum, sub:sub};  //sum is exported, no longer private now

module.exports.sum=sum;
module.exports.sub=sub;

// {sum: sum
// sub:sub}