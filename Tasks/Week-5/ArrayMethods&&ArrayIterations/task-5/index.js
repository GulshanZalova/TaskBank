
const products = [
    { name: "AzərSüd", price: 500,istehsal:"yerli" },
    { name: "Milla", price: 500,istehsal:"yerli" },
    { name: "DostSüd", price: 3000 ,istehsal:"yerli"},
    { name: "Athena", price: 500,istehsal:"xarici" },
    { name: "Golden", price: 1900,istehsal:"xarici" },
    { name: "Milka", price: 1000 ,istehsal:"xarici"},
    { name: "Golden Crown", price: 340,istehsal:"xarici" }
  ];

// 1
let newProducts=products.map(product=>product.price+100)
console.log(newProducts)

// 2

let sortProducts=products.sort((a,b)=>a.name.localeCompare(b.name))

console.log(sortProducts)

// 3 

let result=products.some((product)=>product.istehsal=="yerli")
console.log(result)

// 4

let isTrue=products.every((product)=>product.istehsal=="xarici")
console.log(isTrue)