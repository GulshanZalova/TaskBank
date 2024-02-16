let products = document.querySelector(".products");
let spinner = document.querySelector(".spinner-border");
let search = document.querySelector("#search");
let sortBtn = document.querySelector("#sort");

function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        spinner.classList.replace("d-block", "d-none");
        renderUI(data)
    });
}
getProducts();

function renderUI(myproducts){
  myproducts.forEach((product)=>{
    products.innerHTML+= `
    <div class="col-lg-3 col-md-4">
                <div class="card">
                    <div class="card-img">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    </div>
                    <div class="card-body">
                        <a href="details.html?id=${product.id}">
                            <h5 class="card-title">${product.title}</h5>
                        </a>
                        <p class="card-text"><span class="fw-bold">Price:</span> ${product.price} $</p>
                        <p class="card-text"><span class="fw-bold">Category:</span> ${product.category}</p>
                        <p class="card-text fw-bold">Rating: ${product.rating.rate}<i class="fa-solid fa-star"></i></p>
                    </div>
                </div>
            </div>`;
  })

}
//search
search.addEventListener("keyup", () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        spinner.classList.replace("d-block", "d-none");
      let searchProduct = data.filter(item =>item.title.toLowerCase().trim().includes(search.value.toLowerCase().trim()));
      products.innerHTML="" ;       
       renderUI(searchProduct)
    });
    if (search.value.trim()=="") {
        getProducts();
    }
});


//sort
sortBtn.addEventListener("click", ()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data)=>{
        data.sort((x,y)=> x.price-y.price)
        products.innerHTML=""
            spinner.classList.replace("d-block", "d-none");
           renderUI(data)
    })
})
