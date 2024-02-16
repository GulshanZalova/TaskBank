/* 
Funksiya yazın. Bir parametr qəbul etsin.Parametr array olsun.Funksiyanız təkrarlanan elementi silsin ve arrayı qaytarsın.
*/ 

function dontRepeat(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}


console.log(dontRepeat([1,2,2,3,4,4,4,4,5]))