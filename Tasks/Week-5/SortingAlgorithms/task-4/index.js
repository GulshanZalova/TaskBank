/*

Funksiya yazın.Üç parametr qəbul etsin. Birinci parametr array,ikinci parametr start və üçüncü parametr isə end olsun. Funskiyanız verilən arraydə start və end aralığıdakı ədədləri sıralı şəkildə yeni bir arraydə qaytarsın.

*/ 


function rangeNumbers(arr,start,end){
    let range=[]
    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
             if(arr[j]>arr[j+1]){
                 let element=arr[j]
                 arr[j]=arr[j+1]
                 arr[j+1]=element
             }
        }
     }
     for(let item of arr) {
         if(item>start&&item<end){
            range.push(item)
         }
     }

     return range
     
}

console.log(rangeNumbers([13,2,35,4,51,69,7,85],1,100))