function newPrice(currentPrice , discount ) {
    if(typeof currentPrice !=='number' || typeof discount !== 'number'|| discount <=0 ||discount >=100){
        return 'Invalid'}
      let discountPrice = (currentPrice*discount)/100;
      let payAmount = (discountPrice-discount);
        return payAmount;

      
      
      }

console.log(newPrice(10000, -190))