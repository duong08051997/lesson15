function minArr(a,b,c) {
    arr = [a,b,c];
    let min = arr[0];
    for (let i = 0; i< arr.length; i++){
        if (arr[i]<min){
            min = arr[i]
        }

    }
    console.log(min)

}minArr(-2,4,-4);