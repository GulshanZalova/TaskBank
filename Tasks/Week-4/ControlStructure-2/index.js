/*
Task 1: Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. Bu cəmlərin hasilini tapın. Məsələn, 1243 ədədində tək yerdə duran 1 və 4ün cəmi və cüt yerdə duran 2 və 3ün cəmini tapıb bu cəmlərin hasilini ekrana yazdırın.

*/


// let input="1243"
// let odd=0
// let even=0
// let multiplication
// for(let i=0;i<input.length;i++){
//     if(i%2==0){
//         even+=Number(input[i])
//     }else{
//         odd+=Number(input[i])
//     }
// }

// multiplication=odd*even

// console.log(multiplication)


/*
Task 2: Armstronq ədədləri tapan JavaScript proqramı yazın.
Qeyd:  Bir ədədin Arstronq olub-olmamasını bilmək üçün həmin ədədin hər rəqəmini ədəd neçə rəqəmlidirsə o dərəcədən qüvvətə yüksəldib sonra toplamaqla tapırlar. Həmin cəm ədəd bərabərdirsə bu armstronq ədəddir. 
Məsələn, 3**3 + 7**3 + 1**3 = 371, buna görə də 371 Armstronq nömrəsidir.
Məsələn, 1**4 + 6**4 + 3**4 + 4**4=1634 buna görə də 1634 Armstronqdur.
*/

// let Num=prompt("Ədəd daxil edin:")
// let sum=0

// if(Num>0){
//     for(let i=0;i<Num.length;i++){
//         sum+=Number(Num[i])**Num.length
//     }
    
//     if(Num==sum){
//         console.log("Bu ədəd armstronqdur")
//     }else{
//         console.log("Bu ədəd armstronqdur deyildir")
//     }
// }else{
//     console.log("Zəhmət olmasa müsbət ədəd daxil edin.")
// }
/*

Task 3: [1,4,5,6,7,8,34,56,98]

arrayin elementlərinin cəmini tapın.

*/
// let numbers=[1,4,5,6,7,8,34,56,98]
// let sum=0

// for(let i=0;i<numbers.length;i++){
//     sum+=numbers[i]
// }

// console.log(sum)
/*
Task 4: Daxil edilən ədədin faktorialını tapan proqram yazın.
*/


// let num=parseInt(prompt("Ədəd daxil edin:"))
// let fak=1

// if(num>0){
//     for(let i=num;i>0;i--){
//         fak*=i
//     }
//     console.log(fak)
// }else{
//     console.log("Müsbət ədəd daxil edin")
// }



// Task 5: Daxil edilən ədədin palindrom olub-olmadığını tapın


// let inputNum=prompt("Ədəd daxil edin:")
// let reverseNum=""

// for(let i=inputNum.length-1;i>=0;i--){
//     reverseNum+=inputNum[i]
// }


// if(Number(inputNum)==Number(reverseNum)){
//     console.log("Palindrom ədəddir!!")
// }else{
//     console.log("Palindrom ədəd deyildir!!")
// }
