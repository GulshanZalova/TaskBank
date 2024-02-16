// Aşağıdakı tasklar sillabusdakı "Control structure. Algorithm" mövzusuna aiddir.

/*
Task 1:
Daxil edilən yaşa görə istifadəçinin pensiya yaşına çatıb-çatmadığını tapan proqram yazın.
Ədəd müsbət və 125-dən balaca olmalıdır.

*/

// let age=parseInt(prompt("Yaşınızı daxil edin:"))

// if(age<0){
//     console.log("Yaş mənfi ədəd ola bilməz!!!")
// }else if(age>125){
//     console.log("Yaş 125-dən daha böyük olmamalıdır!!!")
// }else{
//     let result=65-age
//     if(result<=0){
//         console.log("Siz artıq Pensiya üçün uyğun yaşdasınız!!!")
//     }else{
//         console.log("Pensiya yaşı üçün qalan müddət: "+ result + " ildir")
//     }
// }

// FlowChart Forması : https://drive.google.com/file/d/1JsiYU0Y_YDpsGHKzR0a-Y2p7YpThWjtn/view

/*

Task 2: Daxil edilən x və y ədədlərinin aşağıdakı şərtlərinə görə hesablamasını edən proqram yazın. Digər hallarda daxil edilən ədədlərdə biri və ya hər ikisi formata uyğun deyildir yazısı consoleda yazılsın.

Əgər x>0 və y<0 isə 4x+2y+4 ifadəsini hesablayın.
Əgər x>0 və y=0 isə 2x-y+3 ifadəsini hesablayın. 
Əgər x<0 və y>0 isə 3x+4y+3 ifadəsini hesablayın.

*/
// let x=parseInt(prompt("X ədədini daxil edin:"))
// let y=parseInt(prompt("Y ədədini daxil exin:"))
// let result
// if(x>0 && y<0){
//     result=4*x+2*y+4
//     console.log("4x+2y+4="+result)
// }else if(x>0 && y==0){
//     result=2*x-y+3
//     console.log("2x-y+3="+result)
// }else if(x<0 && y>0){
//     result=3*x+4*y+3
//     console.log("3x+4y+3="+result)
// }else{
//     console.log("Tələb olunan formatda ədədlər daxil edin!!!")
// }

// FlowChart Formaslı: https://prnt.sc/INxFSLigQTIp


/*
Task 3: Daxil edilən müsbət ədədin 1-100 arasında olub-olmadığını tapan proqram yazın.
*/
// let num=parseInt(prompt("Ədəd daxil edin:"))

// if(num<1){
//     console.log("Ədəd 1-dən kiçikdir")
// }else if(num>100){
//     console.log("Ədəd 100dən böyükdür")
// }else{
//     console.log("Ədəd 1 və 100 arasında yerləşir.")
// }


// FlowChart Forması: https://prnt.sc/4Eg0S5Px5KGA

/*
Task 4: Daxil edilən 2 ədədin hasilinin sıfır, müsbət yoxsa mənfi ədəd olmasını göstərən funksiya yazın.Ədəd sıfıra bərabər olmamalıdır.
*/

// let firstNumber=parseInt(prompt("Birinci ədədi daxil edin:"))
// let secondNumber=parseInt(prompt("Ikinci ədədi daxil edin:"))

// let multiplication=firstNumber*secondNumber

// if(multiplication<0){
//     console.log("Hasil mənfidir")
// }else if(multiplication>0){
//     console.log("Hasil müsbətdir")
// }else{
//     console.log("Hasil sıfırdır")
// }

// FlowChart Forması: https://prnt.sc/lX5_0jly-Txm
/*
Daxil edilən 3 rəqəmə əsasən üçbucağın tərəfinə görə hansı növü olduğunu müəyyənləşdirən proqram yazın.Hər üç rəqəm müsbət olmalıdır.
*/


// let a=parseInt(prompt("a tərəfini daxil edin:"))
// let b=parseInt(prompt("b tərəfini daxil edin:"))
// let c=parseInt(prompt("c tərəfini daxil edin:"))



// if(a>=0 && b>=0 && c>=0){
//     if(a==b && b==c && c==a){
//         console.log("Bu bərabərtərəfli üçbucaqdır.")
//     }else if(a==b || b==c || a==c){
//         console.log("Bu bərabəryanlı üçbucaqdır.")
//     }else{
//         console.log("Bu müxtəlif tərəfli üçbucaqdır")
//     }
// }else{
//     console.log("Tərəflər mənfi və ya sıfır ola bilməz")
// }


