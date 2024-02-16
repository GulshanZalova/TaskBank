function deleteElement(arr,index){
   if(index<arr.length&&index>0){
    let newArray=arr.filter((item,ItemIndex)=>ItemIndex!==index)
    return newArray
   }else{
    return("Düzgün index daxil edin!!!")
   }
}   


console.log(deleteElement([1,2,3,4,5],2))