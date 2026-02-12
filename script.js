import {products} from './BestOf (2).js'


// console.log(products);
const parent = document.getElementById('parent')
 products.map(item => {
    const div = document.createElement('div')
    div.innerHTML = `

<div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${item.pic}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.name}</h2>
    <p> <span>${item.fulldesc}</span>  <span>${item.price}som</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    `
    parent.appendChild(div)

 })