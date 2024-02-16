/*Function yazın. Parametr qəbul etsin və bu parametr bir array olsun. Funksiya həmin arrayin medianını tapsın.
Median ən ortada dayanan ədədi bildirir. Əgər array uzunluğu cütdürsə onda ortadakı 2 ədədin cəminin yarısı median olacaqdır.
*/

function findMedian(arr){
    let median
    let arrLeng=arr.length/2
    for(let i=arr.length;i>0;i--){
       for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                let element=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=element
            }
       }
    }
    if(arr.length%2!=0){
        let result=Math.floor(arrLeng)
        median=arr[result]
        console.log("salam")
    }else{
      let result=(arr[arrLeng-1]+(arr[arrLeng]))/2
       median=result
       
    }
    console.log(arr)
    return median
}



console.log(findMedian([11,3,42,5,65,7]))