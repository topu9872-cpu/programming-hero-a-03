function newPrice(currentPrice , discount ) 
  
    {
        if(typeof currentPrice !=='number' || discount!== "number"){
            return 'Invalid';
        }
        discount > 0 || discount<=100{
            return 'Invalid'
        }

    let discountprice = (currentPrice*discount) /100;
    let mainprice = currentPrice-discountprice;
return mainprice;
    }  

console.log(newPrice('10000', 90))