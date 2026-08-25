console.log("This is second.js file")

function sum(a,b){
    console.log(a+b);
}

function diff(a,b){
    console.log(a-b); 
}

// export default sum;

// module.exports is empty object {}

module.exports={sum, diff};    //when key:value pairs are sum then write just sum, diff 
// module.exports={sum:sum, diff:diff};  //sum is exported, no longer private now

// module.exports.sum=sum;  //since module.exports is empty {}
// module.exports.diff=diff; 

// {sum: sum
// diff:diff} 