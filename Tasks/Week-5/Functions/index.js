// Aşağıdakı tasklar sillabusdakı "Functions" mövzusuna aiddir.

/*
Task 1:
Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
console.log(array_filled(6, 0));
Expected Output:
[0, 0, 0, 0, 0, 0]
*/


function array_filled(time,num){
    let newArr=[]
    for(let i=0;i<time;i++){
        newArr.push(num)
    }
    return newArr
}

console.log(array_filled(6,0))


/*
Task 2:
Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
Məsələn:
console.log(move([10, 20, 30, 40, 50], 0, 2));
Expected Output:
[20, 30, 10, 40, 50]
*/

function move(arr,currentLocation,nextLocation){
   if(currentLocation>=0 && nextLocation<arr.length && nextLocation>=0){
    let element=arr[currentLocation]
    arr.splice(currentLocation,1)
    arr.splice(nextLocation,0,element)
    return arr
   }else{
     return "Indexləri düzgün daxil edin !!!"
   }
}
console.log(move([10, 20, 30, 40, 50], 1, 0));

/*
Task 3:
Bir funksiya yazın iki parametr qəbul etsin. Birinci parametr rəqəmlərdən ibarət array , ikinici parametr isə rəqəm olsun. Arraydəki bütün  rəqəmlər daxil edilən ikinci parametrin bölənləridirsə, funksiya true return etsin, yox bir dənəsi belə böləni deyilsə false qaytarsın.

console.log(checkFactors([2,3,4,6],12))
Expected Output:
true
console.log(checkFactors([2,3,4,5],12))
Expected Output:
false
*/


function checkFactors(arr,num){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]%num)
        if(num%arr[i]==0){
            newArr.push(arr[i])
        }
    }
    if(newArr.length==arr.length){
        return true
    }else{
        return false
    }
    
}
console.log(checkFactors([2,3,4,5],12))


/*
Task 4:
Daxil edilən cümlədəki  bütün sözlərin baş hərfini böyük edin.
sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores.")

Expected Output:
consectetur
*/

function sentenceCapitalization(sentence){
    let capitalsentence=[]
    let splitsentence=sentence.split(" ")
    for(let sentence of splitsentence){
       let newWord= sentence.replace(sentence[0],sentence[0].toUpperCase())
       capitalsentence.push(newWord)
    }
    return capitalsentence.join(" ")
}
console.log(sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores."))

/*


Task 5:
Funksiya yazın 2 parametr qəbul etsin. Birinci parametr axtarmaq istədiyin hərf, ikinci isə sözün  özü olsun.
hərfin o söz daxilində hansı indexlərdə olduğunu array içərisində qaytarsın.

console.log(findCharIndex("salam","a"))
Expected Output:
[1,3]

*/


function findCharIndex(word,letter){
    let newArr=[]
    for(i=0;i<word.length;i++){
        if(word[i]==letter){
            newArr.push(i)
        }
    }
    return newArr
}

console.log(findCharIndex("mydreamsnewyok","e"))