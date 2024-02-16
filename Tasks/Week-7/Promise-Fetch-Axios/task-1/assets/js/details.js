let id = new URLSearchParams(location.search).get("id");

let detail = document.querySelector(".detail");
let backBtn = document.querySelector("#back-btn");
let spinner = document.querySelector(".spinner-border");
let imgModal = document.querySelector("#modal");
let modalCancel = document.querySelector(".modal-cancel");
let imgDiv = document.querySelector(".img-div");

fetch(`https://fakestoreapi.com/products/${id}`)
  .then((res) => res.json())
  .then((product) => {
    spinner.classList.replace("d-block", "d-none");
    detail.innerHTML += `
    <div class="col-lg-6 d-flex align-items-center justify-content-center">
        <div class="product-img">
            <img class="img-product" src="${product.image}" alt="${product.title}">
        </div>
    </div>
    <div class="col-lg-6 d-flex justify-content-center flex-column">
        <h1 class="card-title">${product.title}</h1>
        <div class="product-details">
            <p class="fw-bold"><span >Price:</span> ${product.price} $</p>
            <p class="fw-bold">Category:<span style="font-weight:500"> ${product.category}</span></p>
            <p class="fw-bold"><span >Count:</span> ${product.rating.count} left</p>
            <p class="fw-bold">Description: <span style="font-size:18px; font-weight:500">${product.description}</span></p>
            <p class="fw-bold mt-5">Rating: <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>   ${product.rating.rate} </p>
        </div>
    </div>`;

    let imgs = document.querySelectorAll(".img-product");
    imgs.forEach((img) => {
      img.addEventListener("click", () => {
        imgDiv.innerHTML = `<img src="${product.image}" alt="${product.title}">`;
        document.body.className = "modal-body";
        imgModal.style.visibility = "visible";
        imgModal.style.opacity = "1";
        imgModal.style.transform = "translate(-50%, -50%) scale(1)";
      });
    });
  });

backBtn.addEventListener("click", () => {
  window.history.back();
});

modalCancel.addEventListener("click", () => {
  document.body.className = "";
  imgModal.style.visibility = "hidden";
  imgModal.style.opacity = "0";
  imgModal.style.transform = "translate(-50%, -50%) scale(0)";
});
