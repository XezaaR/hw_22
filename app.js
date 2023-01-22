const formLoader = document.querySelector('.loader');
const btnAddProduct = document.querySelector('#addLink');
const btnProducts = document.querySelector('#productsLink');
const content = document.querySelector('.content');

formLoader.addEventListener('change', event => {
    let productType = event.target.value;
    switch (productType) {
        case 'milk':
            formLoader.querySelector('div').innerHTML =
                `<input class="form-control" type="number" name="fat"
                       placeholder="Type fat">`;
            break;
        case 'chocolate':
            formLoader.querySelector('div').innerHTML =
                `<input class="form-control" type="text" name="kind"
                       placeholder="Type kind">`;
            break;
        case 'wine':
            formLoader.querySelector('div').innerHTML =
                `<input class="form-control" type="number" name="alcohol"
                       placeholder="Type alcohol">`;
            break;
    }
});

//---------Form Data Handler--------------------
btnAddProduct.onclick = event => {
    formLoader.style.display = 'flex';
    content.style.display = 'none';
}
let productType;
const productTypeSelect = document.querySelector('#type');
productTypeSelect.addEventListener('change',(e)=>{
    productType = productTypeSelect.value;
});
formLoader.onsubmit = event => {
    event.preventDefault();
    let res = {};
    switch (productType) {
        case 'milk':
            console.log('MIlk created');
            res = new Milk(
                event.target.elements.id.value,
                event.target.elements.title.value,
                event.target.elements.manufc.value,
                event.target.elements.price.value,
                event.target.elements.fat.value
            );
            break;

        case 'chocolate':
            res = new Chocolate(
                event.target.elements.id.value,
                event.target.elements.title.value,
                event.target.elements.manufc.value,
                event.target.elements.price.value,
                event.target.elements.kind.value
            );
            break;
        case 'wine':
            res = new Wine(
                event.target.elements.id.value,
                event.target.elements.title.value,
                event.target.elements.manufc.value,
                event.target.elements.price.value,
                event.target.elements.alcohol.value
            );
            break;
    }
    store.add(res);
    console.log(store);
    formLoader.reset();
};

//------------------Add Button Handler-------------------
function renderStoreList(all, card) {
    content.innerHTML = all.map(card).join('\n');
}

btnProducts.onclick = e => {
    formLoader.style.display = 'none';
    content.style.display = 'flex';
    renderStoreList(store.getAll(), card);
    console.log(store)
}

function card(product) {
    return `<div class="card">
            <h2>${product.title}</h2>
            <h3>ID: ${product.id}</h3>
            <h3>Manufacturer: ${product.manufacture}</h3>
            <h3>${getOwnProperty(product)}</h3>
            <h3>Price: ${product.price}</h3>
        </div>`
}
function getOwnProperty(product) {
    if(product.fat)
            return `Fat: ${product.fat}`
        else if (product.kind)
            return `Kind: ${product.kind}`
        else if(product.alcohol)
            return `Alcohol: ${product.alcohol}`
        else return `   `;
}

//---------





