// Funksiya yazın. İki parametr qəbul etsin. Birici parametr array, ikinci parametr isə element olsun. Funksiyanız array içərisində o elementin olub-olmadığını yoxlasın. Əgər varsa indeksini, yoxdursa -1 return etsin.


function checkElement(arr,element){
    let result=-1
    for(let i=0;i<arr.length;i++){
        if(arr[i]==element){
           result= i
        }
    }
    return result
}

console.log(checkElement([1,2,3,4,5,6],9))


