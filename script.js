// let URL = "https://fakestoreapi.com/products";
// let container = document.querySelector('.container');
// let showMoreButton = document.getElementById('show-more');
// let fullData = [];

// fetch(URL)
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     fullData = data; 
//     displayProducts(3); 
//     if (data.length > 3) {
//         showMoreButton.style.display = 'block'; 
//     }
// });


// function displayProducts(count) {
//     container.innerHTML = ''; 
//     let limitedData = fullData.slice(0, count);
//     for (let subData of limitedData) {
//         let pro_box = document.createElement('div');
//         pro_box.setAttribute('class', 'product_sect')
//         pro_box.innerHTML = `<img src="${subData.image}" class="pro_img"> <br> Product ID: ${subData.id} <br> Product Title: ${subData.title} <br> Product description: ${subData.description} <br> Product Category: ${subData.category}`;
//         container.append(pro_box);
//     }
// }

// showMoreButton.addEventListener('click', function() {
//     displayProducts(fullData.length); 
//     showMoreButton.style.display = 'none'; 
// });


let box = document.querySelector('.container');
let body = document.querySelector('body');
let btn = document.querySelector('.btn');

function toggle () {
    body.classList.toggle('black');
    btn.classList.toggle('button');
}
