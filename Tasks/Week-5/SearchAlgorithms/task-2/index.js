// Funksiya yazın. İki parametr qəbul etsin. Birinci parametr array, ikinci parametr isə element qəbul etsin. Funksiyanız elementin arraydə neçə dəfə olduğunu yoxlasın. Əgər yoxdursa -1, varsa sayını qaytarsın.



function Count(arr,element){
    let result=-1
    let count=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==element){
           count++
           result=count
        }
    }
    return result
}

console.log(Count([1,2,2,3,4,2,5,2],10))