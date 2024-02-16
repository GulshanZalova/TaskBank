/* Məhsulları ucuzdan bahalıya düzün.*/

const products = [
    { name: "AzərSüd", price: 500,istehsal:"yerli" },
    { name: "Milla", price: 500,istehsal:"yerli" },
    { name: "DostSüd", price: 3000 ,istehsal:"yerli"},
    { name: "Athena", price: 500,istehsal:"xarici" },
    { name: "Golden", price: 1900,istehsal:"xarici" },
    { name: "Milka", price: 1000 ,istehsal:"xarici"},
    { name: "Golden Crown", price: 340,istehsal:"xarici" }
  ];

function cheapToExpensive(arr){
    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
             if(arr[j].price>arr[j+1].price){
                 let element=arr[j]
                 arr[j]=arr[j+1]
                 arr[j+1]=element
             }
        }
     }
     return arr
}


console.log(cheapToExpensive(products))

