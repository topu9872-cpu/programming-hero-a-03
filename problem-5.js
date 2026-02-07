function  analyzeText(str) {
       if(typeof str !== 'string' ||typeof str ==='') {
        return 'Invalid';
       }
       let bigWord=str.split(' ');
       
       let big='';
       for(let i=0;i<bigWord.length;i++ ){
        if(bigWord[i].length>big.length){
big=bigWord[i];

        }
         
       }
      let x =str.split(' ').join('').length;
     return {longwords: big,token:x
      }
       
    }
// console.log(analyzeText('tyuijhgfghj hjkjhj'));