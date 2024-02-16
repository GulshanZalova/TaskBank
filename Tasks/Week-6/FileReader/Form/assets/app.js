let nameİnput=document.querySelector("#name")
let surnameİnput=document.querySelector("#surname")
let imageİnput=document.querySelector("#image")
let form=document.querySelector(".register-form")
let img=""
let users=document.querySelector(".users")

imageİnput.addEventListener("change",(e)=>{
  const fr=new FileReader()
  fr.readAsDataURL(imageİnput.files[0])
  fr.addEventListener("load",()=>{
    const url= fr.result
   if(imageİnput.files[0].type.includes("image")){
    img=url
   }else{
     alert("Zəhmət olmasa şəkil seçin")
     imageİnput.value=""
   }
  })
})


form.addEventListener("submit",(e)=>{
    e.preventDefault()
   if(nameİnput.value==""||surnameİnput.value==""||img==""){
    alert("Boş sahə saxlamayın!!!")
   }else{
    const userInfo={
      name: nameİnput.value,
      surname: surnameİnput.value,
      imgUrl:img
    }
    nameİnput.value=""
    surnameİnput.value=""
    img=""
    AddData(userInfo)
   }
})

function AddData(info){
  console.log(info)
  users.innerHTML+=`
  
  <div class="user">
  <div class="image">
      <img src=${info.imgUrl} alt="">
  </div>
  <div class="info">
      <span>${info.name}</span>
      <span>${info.surname}</span>
  </div>
  <div class="delete">
  <i class="fa-solid fa-trash"></i>
  </div>
</div>
  `
  imageİnput.value=""
  let deleteBtns=document.querySelectorAll(".delete")
  deleteBtns.forEach(deleteBtn=>{
    deleteBtn.addEventListener("click",()=>{
      let deletedElement= deleteBtn.parentElement.remove()
    })
  })
}
