var array = [1,2,3,4,5]
var result = "";
for (var value of array) 
{
  result += value + ",";
}
console.log(result.slice(0, result.length - 1));

