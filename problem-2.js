function validOtp(otp) {
    if(typeof otp === 'string' && otp.length=== 8 && otp.startsWith('ph-')){
        return true;}
        else if(otp.startsWith !=='ph-' && typeof otp !== 'string' ){
            return 'Invalid';
        }
        else{
            return false;
        }
}


    

// console.log(validOtp('12345678'));