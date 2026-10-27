const inventory = [];

function findProductIndex(productName) {
  productName = productName.toLowerCase();

  return inventory.findIndex(
    (product) => product.name.toLowerCase() === productName,
  );
}


function addProduct(product) {
    const productName = product.name.toLowerCase(); 

    const productExists = inventory.find(
        (item) => item.name.toLowerCase() === productName
    );

    if (productExists) {
        productExists.quantity += product.quantity;
        console.log(`${productName} quantity updated`);
    } else {
        inventory.push({ name: productName, quantity: product.quantity });
        console.log(`${productName} added to inventory`);
    }
}


function removeProduct(productName, productQuantity) {
    const name = productName.toLowerCase(); 

    const item = inventory.find(i => i.name === name);

    if (!item) {
        console.log(`${name} not found`);
        return;
    }

    if (productQuantity > item.quantity) {
        console.log(`Not enough ${name} available, remaining pieces: ${item.quantity}`);
    } else {
        item.quantity -= productQuantity;

        if (item.quantity === 0) {
            inventory.splice(inventory.indexOf(item), 1);
        }

        console.log(`Remaining ${name} pieces: ${item.quantity}`);
    }
}


console.log(inventory);

console.log(findProductIndex("Flour"));

addProduct({ name: "Flour", quantity: 5 });
addProduct({ name: "FLOUR", quantity: 5 });
console.log(inventory)




