
function gonoVote(array){
     if(!Array.isArray(array)){
        return 'Invalid';
    }
    
    let ha = array.filter(vote=> vote==='ha').length;
    let na = array.filter(vote=> vote==='na').length;
   

   if(ha>na){
        return true;
    }
    else if(ha<na){
        return false;
    }else{
        return 'equal';
    }
}
// console.log(gonoVote(['ha','na','ha','na','ha','na']));