// Aşağıdakı tasklar sillabusdakı "Number Systems.Variable. Data Types. Operators" mövzusuna aiddir.


/*
Task 1: Daxil edilən saniyə dəyərini özündə saxlayan bir variable yaradın.Bu saniyə dəyərinin necə dəqiqə və saniyəyə bərabər olduğunu tapan proqram yazın.
Məsələn əgər 145 saniyə yazılıbsa, cavabda 2 dəqiqə 25 saniyə tapılmalıdır.
*/

let time = 145
let minute
let second

minute=parseInt(145/60)
second=145%60



/*
Task 2: Daxil edilən katetlərə görə düzbucaqlı üçbucağın sahəsini tapan proqram yazın.
*/
let a=30
let b=40

let sahe=(a*b)/2



/*
Task 3: Daxil edilən iki ədədin cəminin kubunu və kublarının cəmini tapın.
*/

let firstNumber=10
let secondNumber=20

let kubunCemi=1**3 + 4**3
let ceminKubu=(1+4)**3



/*
Task 4: İstifadəçidən alınan kredit miqdarı,faiz dərəcəsi və kredit müddəti əsasında aylar üzrə nə qədər ödəniş etməli olduğunu tapan proqram yazın.
*/ 

let creditAmount=2000
let creditPersent=20
let taksit=12

let totalCredit=2000+((2000*20)/100)
let payForMonth=totalCredit/taksit


/*
Task 5: Ədədin faizini tapan proqram yazın.İstifadəçidən ədədi və faiz göstərən ədədi alın.

*/

let number=20
let percentNumber=30

let percent=(20*30)/100