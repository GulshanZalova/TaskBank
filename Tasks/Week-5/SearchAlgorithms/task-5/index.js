/*
 Funksiya yazın.İki parametr qəbul etsin. Birinci parametr array ikinci parametr isə bir ədəd olsun. Funksiyanız bu array içərisində olan ədədlərdən parametr kimi daxil etdiyimiz ədəddən kiçik və ya ona bərabər olan ən böyük ədəddi tapmalıdır.Məsələn 
 findBigNumber([11,2,32,4,57,6], 45) burada 45 -dən kiçik olan ən böyük ədəd 32-dir. Deməli 32-ni return edəcək.
*/

function findBigNumber(arr,num){
    let bigger=undefined
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=num && (bigger==undefined || arr[i]>bigger )){
            bigger=arr[i]
        }
    }
    return bigger
}

console.log(findBigNumber([11,2,-32,4,57,-6], 45))