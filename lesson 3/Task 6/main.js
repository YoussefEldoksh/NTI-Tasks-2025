let table = document.getElementById("data-table");



let itemName = document.getElementById("item-name-input");
let itemPrice = document.getElementById("item-price-input");
let itemDescription = document.getElementById("description-textarea");
let itemCategory = document.getElementById("category-select");
let isAvailable = document.getElementById("availability-checkbox");
let submitButton = document.getElementById("submit-button");
submitButton.classList.add("button-update");


let itemForm = document.getElementById("item-form");

let itemsArray = [];



function renderTable() {
    let newItem = '';
    newItem = ` <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Availability</th>
                    <th scope="col">Update/Delete</th>
                </tr>
            </thead>
            <tbody id="table-body">

            </tbody>
            `
    table.innerHTML += newItem;
}


function appendItemToTable(item, index) {
    let row = document.createElement("tr");
    row.innerHTML = `
        <th scope="row">${index}</th>
        <td>${item.itemName}</td>
        <td>$${parseFloat(item.itemPrice).toFixed(2)}</td>
        <td>${item.itemCategory}</td>
        <td>${item.isAvailable ? "Yes" : "No"}</td>
        <td>
            <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                <button type="button" class="btn btn-outline-primary" id= "update-button"">Update</button>
                <button type="button" class="btn btn-outline-danger" id= "delete-button">Delete</button>
            </div>
        </td>
    `;
    document.getElementById("table-body").appendChild(row);

    row.querySelector("#update-button").addEventListener("click", () => updateData(index - 1));
    row.querySelector("#delete-button").addEventListener("click", () => deleteData(index - 1));
}




itemForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (itemName.value && itemPrice.value && itemDescription.value && itemCategory.value && isAvailable.value && !isNaN(itemPrice.value) && itemPrice.value > 0) {
        let item = {
            itemName: itemName.value,
            itemPrice: itemPrice.value,
            itemDescription: itemDescription.value,
            itemCategory: itemCategory.value,
            isAvailable: isAvailable.checked,
        };

        console.log(item);

        itemsArray.push(item);


        if (!table.querySelector("thead")) {
            renderTable();
            appendItemToTable(item, itemsArray.length);

        }

        else {
            appendItemToTable(item, itemsArray.length);
        }


        itemName.value = "";
        itemPrice.value = "";
        itemDescription.value = "";
        itemCategory.value = "";
        isAvailable.checked = false;
    }
    else {
        alert("Please fill out all fields correctly. Price must be a valid number greater than 0.");
    }

});


function updateData(index) {
    submitButton.textContent = "Update ->";

    let item = itemsArray[index];
    itemName.value = item.itemName;
    itemPrice.value = item.itemPrice;
    itemDescription.value = item.itemDescription;
    itemCategory.value = item.itemCategory;
    isAvailable.checked = item.isAvailable;

    submitButton.dataset.index = index;

    submitButton.onclick = (event) => {
        event.preventDefault();
        if (
            itemName.value &&
            itemPrice.value &&
            itemDescription.value &&
            itemCategory.value &&
            !isNaN(itemPrice.value) &&
            itemPrice.value > 0) {
            itemsArray[index] = {
                itemName: itemName.value,
                itemPrice: parseFloat(itemPrice.value),
                itemDescription: itemDescription.value,
                itemCategory: itemCategory.value,
                isAvailable: isAvailable.checked,
            };

            let tableBody = document.getElementById("table-body");
            tableBody.innerHTML = "";
            itemsArray.forEach((item, index) => appendItemToTable(item, index));
            itemName.value = "";
            itemPrice.value = "";
            itemDescription.value = "";
            itemCategory.value = "";
            isAvailable.checked = false;
            submitButton.textContent = "Add Item";
            submitButton.onclick = null;
        }

        else {
            alert("Please fill out all fields correctly. Price must be a valid number greater than 0.");
        }
    }
}

function deleteData(index) {

    itemsArray.splice(index, 1);

    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    itemsArray.forEach((item, index) => appendItemToTable(item, index));

}