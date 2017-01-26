
function findsum(){
console.log(arguments)
var sum=0; 
for(var i=0; i<=arguments.length-1;i++)
{
sum+=arguments[i];
}
return sum;
};

console.log(findsum(1,2,3))
console.log(findsum(1,2,3,4,5,6,7,8,9,10))
