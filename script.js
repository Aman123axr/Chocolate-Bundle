const chocolates = [{
    name: "Dark Chocolate Truffle",
    price: 2.50,
    image: "photos/caremel.jpg"
}, {
    name: "Milk Chocolate Caramel",
    price: 3.00,
    image: "photos/darkChocolate.jpg"
}, {
    name: "Hazelnut Praline",
    price: 4.00,
    image: "photos/Hazelnut_Praline_new.jpg"
}, {
    name: "Strawberry Shortcake",
    price: 3.50,
    image: "photos/Strawberry-Shortcake-Cake.jpg"
}];

const chocolateList = document.getElementById("chocolate-list");
const selectedItems = document.getElementById("selected-items");
const totalPriceDisplay = document.getElementById("total-price");
const addToCartButton = document.getElementById("add-to-cart");

let selectedChocolates = [];
let totalPrice = 0;

function displayChocolates() {
    chocolates.forEach(chocolate => {
        const listItem = document.createElement("li");
        listItem.classList.add("chocolate-item");
        listItem.innerHTML = `
            <img src="${chocolate.image}" alt="${chocolate.name}" />
            <span class="name">${chocolate.name}</span>
            <span class="price">$${chocolate.price}</span>
            <button data-chocolate-name="${chocolate.name}">Add</button>
        `;
        listItem.querySelector("button").addEventListener("click", handleChocolateSelect);
        chocolateList.appendChild(listItem);
    });
}

function handleChocolateSelect(event) {
    const chocolateName = event.target.dataset.chocolateName;
    const selectedChocolate = chocolates.find(chocolate => chocolate.name === chocolateName);

    if (selectedChocolates.length >= 8) {
        alert("You can only select up to 8 chocolates.");
        return;
    }

    selectedChocolates.push(selectedChocolate);
    updateSelectedItemsList();
    updateTotalPrice();
}

function updateSelectedItemsList() {
    selectedItems.innerHTML = "";
    selectedChocolates.forEach(chocolate => {
        const listItem = document.createElement("li");
        listItem.innerText = `${chocolate.name} (${chocolate.price})`;
        selectedItems.appendChild(listItem);
    });
}

function updateTotalPrice() {
    totalPrice = 0;
    selectedChocolates.forEach(chocolate => {
        totalPrice += chocolate.price;
    });
    totalPriceDisplay.innerText = `$${totalPrice.toFixed(2)}`;
}

displayChocolates();
