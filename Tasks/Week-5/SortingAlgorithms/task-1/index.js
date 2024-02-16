// Funksiya yazın. Bu funksiya bir parametr qəbul etsin. Bu parametr bir cümlə olsun və funksiyanız bu cümlədəki ən uzun sözü tapsın.

function longerWord(str){
    let wordArr=str.split(" ")
    let newArr=[]
    let longer=""
    for(let i=0;i<wordArr.length;i++){
      newArr.push(wordArr[i].replace(/[^\w]/g, ""))
    }
  
    for(let i=0;i<newArr.length;i++){
       if(newArr[i].length>longer.length){
          longer=newArr[i]
       }
    }
    
     return longer
  }
  
  console.log(longerWord("Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores."))