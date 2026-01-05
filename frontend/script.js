function womenProduct() {
  fetch("http://localhost:3000/womanproduct")
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById("women-products");
      container.innerHTML = "";

      const womenProducts = products.filter(
        product => product.category === "Women Pajamas"
      );

      womenProducts.forEach(product => {
        container.innerHTML += `
          <div style="border:1px solid #ccc; margin:10px; padding:10px;">
            ${product.imagelink ? `<img src="${product.imagelink}" alt="${product.name}" style="width:200px;height:200px;object-fit:cover;">` : ''}
            <h3>${product.name}</h3>
            <p>Price: ৳${product.price}</p>
            <p>Brand: ${product.brand}</p>
          </div>
        `;
      });
    })
    .catch(err => console.error(err));
}

womenProduct();
