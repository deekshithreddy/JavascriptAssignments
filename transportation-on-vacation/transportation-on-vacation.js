var d = 8;
const CARRENTAL = 40 ;
var totalExpense;
  if(d >= 3 && d < 7)
  {
    totalExpense = ( CARRENTAL * d ) - 20 ;
  }
  else if(d >= 7)
  {
     totalExpense = ( CARRENTAL * d ) - 50 ; 
  }
  else 
  {
    totalExpense = ( CARRENTAL * d ) ;
  }
  console.log(totalExpense);