
//  Funksiya yazın. Bu funksiya bir parametr qəbul etsin. Parametr bir söz olacaq və funksiyanız bu söz içərisindəki hərflərdən əlifba sırasına görə ən böyük olanını qaytarmalıdır.


function sortForAlphabet(word){
    let arr=word.toLowerCase()
    console.log(arr)
    if (arr.length === 0) {
        return "Dizi boş.";
    }

    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
}

console.log(sortForAlphabet("zxSaLaMe"))