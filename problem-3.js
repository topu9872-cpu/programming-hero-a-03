function finalScore (omr) {
          if(typeof omr !== "object" || Array.isArray(omr)){
            return 'Invalid'
          }
          
          let totalMarks=omr.right+omr.wrong+omr.skip;
          if(totalMarks !== 100 )
            return 'Invalid'
          
         let rightMarks=omr.right-omr.wrong*0.5;
        let marks= Math.round(rightMarks);
            return marks;
         }

console.log(finalScore ({right:70,wrong:30,skip:0}));
