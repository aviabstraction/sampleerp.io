const productForm  = document.getElementById("product-form")
const productName = document.getElementById("product-name")
const productPrice = document.getElementById("product-price")
const productDesc = document.getElementById("product-desc")
const displayProducts = document.getElementById("display-products")

const handleFormSubmit = (e)=>{
  e.preventDefault();
  const postData = {
    name: productName.value,
    description: productDesc.value,
    price: Number(productPrice.value),
  };
  fetch("https://node-api-twij.onrender.com/api/products", {
    method: "POST",
    body: JSON.stringify(postData),
  })
    .then((data) => {
        console.log(data,"data")
        window.location.reload()
      alert("product added on ur ERP");
    })
    .catch((err) => console.log(err));
}

productForm.addEventListener("submit",handleFormSubmit)

window.addEventListener("DOMContentLoaded", function () {

  fetch("https://node-api-twij.onrender.com/api/products")
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.forEach(item => {     
       let li = document.createElement("li");

       li.style.listStyle = "none"


        li.innerText = `${item.name} - ${item.price}`
        displayProducts.appendChild(li)
      });
      console.log(responseJson);
    })
    .catch((err) => console.log(err));
});