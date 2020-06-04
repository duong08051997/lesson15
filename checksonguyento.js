function isPrime(number) {
    if (number < 2){
        return false;
    }else if(number === 2){
        return true;
    }
    else {
        for (let i = 2;i <number;i++){
            if(number % i === 0){
             return false;
            }
        }
        return true;
    }

}
function printNumber() {
    for (let num = 0; num <10000 ; num++) {
        if ( isPrime(num)){
        console.log(num);
        }
    }

}printNumber() ;