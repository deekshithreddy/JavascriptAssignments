var operation = '+';
var value1 = 10;
var value2 = 25;

if(!isNaN(value1) && !isNaN(value2))
{
  switch(operation)
  {
  case '+': console.log(value1 + value2);
            break;
  case '-': console.log(value1 - value2);
            break;
  case '*': console.log(value1 * value2);
            break;
  case '/': console.log(value1 / value2);
            break;
  }
}
else
{
 console.log("Sumbit numbers for the values");
}