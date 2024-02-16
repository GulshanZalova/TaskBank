// Funksiya yazın. Parametr qəbul etsin. Bu parametr array olsun və həmin array kiçik-dən böyüyə sıralansın.


function sortingNumbers(arr){
    for(let i=arr.length;i>0;i--){
       for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                let element=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=element
            }
       }
    }
    return arr
}



console.log(sortingNumbers([11,3,42,5,65,7]))