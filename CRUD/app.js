class Product {
  constructor(id, name, quantity, price, category) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.category = category;
  }
}

class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

let type1 = new Category(1, "Gia cầm");
let type2 = new Category(2, "Gia súc");

let categories = [type1, type2];

let p1 = new Product(1, "Gà", 2, 20000, type1);
let p2 = new Product(2, "Vịt", 5, 25000, type2);

let products = [p1, p2];



function renderProducts() {
  let eTbodyMain = document.querySelector("#tbodyMain");

  let str = "";
  let total = 0;
  for (i = 0; i < products.length; i++) {
    total += products[i].quantity * products[i].price;
    str += `
        <tr id="tr_${products[i].id}">
              <td>${products[i].id}</td>
              <td>${products[i].name}</td>
              <td>${products[i].category.name}</td>
              <td class="text-right">${products[i].quantity}</td>
              <td class="text-right">${formatCurrency(parseInt(products[i].price))}</td>
              <td class="text-right">${formatCurrency(parseInt(products[i].quantity * products[i].price))}</td>
              <td id="btn-act">
                <button type="button" class="btn btn-edit" onclick="handleBtnEdit(${
                  products[i].id
                })"
                  ><i class="fa-solid fa-pen-to-square"></i
                ></button>
                <button type="button" class="btn btn-remove" onclick="handleBtnRemove(${
                  products[i].id
                })"
                  ><i class="fa-solid fa-trash"></i
                ></button>
              </td>
            </tr>
        `;
  }
  str += `
        <tr>
              <td class="tb-foot tb-foot-total" colspan="5">Total amout:</td>
              <td class="tb-foot">${formatCurrency(parseInt(total))}</td>
        </tr>
        `;

  eTbodyMain.innerHTML = str;
}
renderProducts();

function handleBtnAdd() {
  let name = document.querySelector(".formCreate input[name='txtName']").value;
  let quantity = document.querySelector(
    ".formCreate input[name='txtQuantity']"
  ).value;
  let price = document.querySelector(
    ".formCreate input[name='txtPrice']"
  ).value;
  let categoryID = document.querySelector(
    ".formCreate select[name='sCategory']"
  ).value;

  let cate = null;
  for (i = 0; i < categories.length; i++) {
    if (categories[i].id == categoryID) {
      cate = categories[i];
    }
  }

  let pNew = new Product(products.length + 1, name, quantity, price, cate);

  if (!validateProduct(pNew)) {
    alert("Please Enter Infor");
  } else {
    products.push(pNew);
    renderProducts();
  }
  isEddting = false;
}

function validateProduct(product) {
  if (product.name == "") {
    return false;
  }
  if (product.price == "" || product.price < 0) {
    return false;
  }
  if (product.quantity == "" || product.quantity < 0) {
    return false;
  }
  return true;
}

function findCategoryById(id) {
  let cate = null;
  for (i = 0; i < categories.length; i++) {
    if (categories[i].id == id) {
      cate = categories[i];
    }
  }
  return cate;
}

function findProductById(id) {
  for (i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      return products[i];
    }
  }
}



let isEddting = false;
function handleBtnEdit(id) {
  if (isEddting == false) {
    isEddting = true;
    let product = findProductById(id);

    let tdName = document.querySelectorAll(`#tr_${id} td`)[1];
    let tdCategory = document.querySelectorAll(`#tr_${id} td`)[2];
    let tdQuantity = document.querySelectorAll(`#tr_${id} td`)[3];
    let tdPrice = document.querySelectorAll(`#tr_${id} td`)[4];
    let tdAction = document.querySelectorAll(`#tr_${id} td`)[6];

    tdName.innerHTML = `<input class="item" name="itemName" type="text" value="${product.name}">`;
    tdQuantity.innerHTML = `<input class="item text-right" name="itemQuantity" type="text" value="${product.quantity}">`;
    tdPrice.innerHTML = `<input class="item text-right" name="itemPrice" type="text" value="${product.price}">`;

    let strSelect = "";
    strSelect += "<select name='itemCategory'>";
    for (i = 0; i < categories.length; i++) {
      strSelect += `<option value="${categories[i].id}">${categories[i].name}</option>`;
    }
    strSelect += "</select>";
    tdCategory.innerHTML = strSelect;

    tdAction.innerHTML = `
    <button type="button" class="btn btn-update" onclick="handleUpdate(${product.id})"
        ><i class="fa-solid fa-check"></i></button>
      <button type="button" class="btn btn-remove" onclick="handleCancel(${product.id})"
        ><i class="fa-solid fa-xmark"></i></button>
    `;

    let eInputQuantity = document.querySelector("input[name='itemQuantity']");
    eInputQuantity.addEventListener("input", (evt) => {
      let eInputPrice = document.querySelector("input[name='itemPrice']");
      let tdAmout = document.querySelectorAll(`#tr_${id} td`)[5];

      tdAmout.innerText = formatCurrency(parseInt(eInputPrice.value * evt.target.value));
    });

    let eInputPrice = document.querySelector("input[name='itemPrice']");
    eInputPrice.addEventListener("input", (evt) => {
      let eInputQuantity = document.querySelector("input[name='itemQuantity']");
      let tdAmout = document.querySelectorAll(`#tr_${id} td`)[5];

      tdAmout.innerText = formatCurrency(parseInt(eInputQuantity.value * evt.target.value));
    });
  }
}

function handleUpdate(id) {
  let name = document.querySelector("input[name='itemName']").value;
  let categoryID = document.querySelector("select[name='itemCategory']").value;
  let quantity = document.querySelector("input[name='itemQuantity']").value;
  let price = document.querySelector("input[name='itemPrice']").value;

  let cate = findCategoryById(categoryID);
  let productUpd = new Product(id, name, quantity, price, cate); // => doi tuong productUpd
  if (validateProduct(productUpd)) {
    updateProduct(id, productUpd); //tao ham nay de xu li tren hang da co ID
    renderProducts();
  }
}

function updateProduct(id, productUpd) {
  for (i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products[i].name = productUpd.name;
      products[i].category = productUpd.category;
      products[i].quantity = productUpd.quantity;
      products[i].price = productUpd.price;
      products[i].amount = productUpd.quantity * productUpd.price;
    }
  }
  isEddting = false;
}

function handleCancel(id) {
  isEddting = false;
  let product = findProductById(id);
  document.querySelectorAll(`#tr_${id} td`)[1].innerText = product.name;
  document.querySelectorAll(`#tr_${id} td`)[2].innerText = product.category.name;
  document.querySelectorAll(`#tr_${id} td`)[3].innerText = product.quantity;
  document.querySelectorAll(`#tr_${id} td`)[4].innerText = formatCurrency(parseInt(product.price));
  document.querySelectorAll(`#tr_${id} td`)[5].innerText =
  formatCurrency(parseInt(product.quantity * product.price));

  document.querySelectorAll(`#tr_${id} td`)[6].innerHTML = `
  <button type="button" class="btn btn-edit" onclick="handleBtnEdit(${products[i].id})"
    ><i class="fa-solid fa-pen-to-square"></i
  ></button>
  <button type="button" class="btn btn-remove" onclick="handleBtnRemove(${products[i].id})"
    ><i class="fa-solid fa-trash"></i
  ></button>
  `;

}

function handleBtnRemove(id){
  let product = findProductById(id);
  let check = confirm(`Are you sure you want to remove ${product.name}`);
  if(check) {
    deleteProductById(id);
    renderProducts();
  }
}

function deleteProductById(id){
  for(i = 0; i < products.length; i++){
    if(products[i].id == id){
      products.splice(i, 1);
      break;
    }
  }
}

function formatCurrency(number){
  return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND'});
}