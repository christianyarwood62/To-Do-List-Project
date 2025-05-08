import { itemTable, addItemToArray, removeItemFromArray, ToDoProject, ToDoItem } from "./ToDo_item_data_handlers";
import { projectTable } from "./project_data_handlers";

// export function renderGenericToDoList() {

    // const content = document.querySelector('#content');
    // content.innerHTML = '';

    // // Creates the title for the front page
    // const titleDiv = document.createElement('div');
    // const frontPageTitle = document.createElement('h1');
    // frontPageTitle.textContent = 'To Do Items';
    // content.appendChild(titleDiv);
    // titleDiv.appendChild(frontPageTitle);

    // // Add a button to add a item to the table
    // const addItemBtn = document.createElement('button');
    // addItemBtn.textContent = 'Add an Item';
    // addItemBtn.classList.add('add-item-btn');
    // titleDiv.appendChild(addItemBtn);

    // // Create an area to hold the items
    // const itemsDiv = document.createElement('div');
    // itemsDiv.classList.add('items-list')
    // content.appendChild(itemsDiv);

    // // Create a row of headers for the item list
    // const itemsList = document.querySelector('.items-list');
    // const itemsHeaders = document.createElement('div');
    // const itemsDueDate = document.createElement('h2');
    // const itemsTitle = document.createElement('h2');
    // const itemsListNoHeader = document.createElement('div');
    // itemsHeaders.classList.add('items-list-row');
    // itemsTitle.classList.add('item-title-column');
    // itemsDueDate.classList.add('item-date-column');
    // itemsListNoHeader.classList.add('items-list-content');

    // itemsTitle.textContent = 'Item';
    // itemsHeaders.appendChild(itemsTitle);

    // itemsDueDate.textContent = 'Due Date';
    // itemsHeaders.appendChild(itemsDueDate);

    // itemsList.appendChild(itemsHeaders);
    // itemsList.appendChild(itemsListNoHeader);

    // addItemBtn.addEventListener('click', () => {
    //     showItemDialog();
    // })
// }

// Function to display a prompt for adding a new item
function showItemDialog() {
    const itemDialog = document.querySelector('#item-dialog');
    itemDialog.showModal();

}

export function refreshItemList() {
    const itemListNoHeader = document.querySelector('.items-list-content');
    itemListNoHeader.innerHTML = '';
    itemTable.forEach(element => {
        const itemsList = document.querySelector('.items-list');
        const item = document.createElement('div');

        item.classList.add('items-list-row');
    
        const newItemTitle = document.createElement('p');
        const newItemDueDate = document.createElement('p');
        const itemChecked = document.createElement('input')
        newItemTitle.classList.add('item-title-column');
        newItemDueDate.classList.add('item-date-column');
        newItemTitle.textContent = element.title;
        newItemDueDate.textContent = element.dueDate;
        item.appendChild(newItemTitle);
        item.appendChild(newItemDueDate);
        itemListNoHeader.appendChild(item);

        // Create a remove button for each to do item
        const removeItemBtn = document.createElement('p');
        removeItemBtn.classList.add('remove-item-btn');
        removeItemBtn.textContent = 'X';
        item.appendChild(removeItemBtn);

        // Event: click on the X to remove the item from the table
        removeItemBtn.addEventListener('click', () => {
            removeItemFromArray(element);
            const content = document.querySelector('.items-list-content');
            content.innerHTML = '';
            refreshItemList();
        })
    })
}

// export function refreshItemList2() {

// }

// Event: Display the new array of to do items
const itemDialog = document.querySelector('#item-dialog');
const addItemBtn = document.querySelector('#add-item-to-table-btn');
addItemBtn.addEventListener('click', (event) => {
    const itemListNoHeader = document.querySelector('.items-list-content');
    const itemForm = document.querySelector('#item-form');

    event.preventDefault();
    addItemToArray();
    itemForm.reset();
    itemDialog.close();
    refreshItemList();
    // addItemToSidebar();
})

// Event: Show the generic to do items upon webpage initialisation
addEventListener("DOMContentLoaded", (event) => {

})

export function createContentTemplate() {
    const content = document.querySelector('#content');
    // content.innerHTML = '';
    console.log('test');
    // Creates the title for the front page
    const titleDiv = document.createElement('div');
    const frontPageTitle = document.createElement('h1');
    frontPageTitle.textContent = 'To Do Items';
    content.appendChild(titleDiv);
    titleDiv.appendChild(frontPageTitle);

    // Add a button to add a item to the table
    const addItemBtn = document.createElement('button');
    addItemBtn.textContent = 'Add an Item';
    addItemBtn.classList.add('add-item-btn');
    titleDiv.appendChild(addItemBtn);

    // Create an area to hold the items
    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('items-list')
    content.appendChild(itemsDiv);

    // Create a row of headers for the item list
    const itemsList = document.querySelector('.items-list');
    const itemsHeaders = document.createElement('div');
    const itemsDueDate = document.createElement('h2');
    const itemsTitle = document.createElement('h2');
    const itemsListNoHeader = document.createElement('div');
    itemsHeaders.classList.add('items-list-row');
    itemsTitle.classList.add('item-title-column');
    itemsDueDate.classList.add('item-date-column');
    itemsListNoHeader.classList.add('items-list-content');

    itemsTitle.textContent = 'Item';
    itemsHeaders.appendChild(itemsTitle);

    itemsDueDate.textContent = 'Due Date';
    itemsHeaders.appendChild(itemsDueDate);

    itemsList.appendChild(itemsHeaders);
    itemsList.appendChild(itemsListNoHeader);

    addItemBtn.addEventListener('click', () => {
        showItemDialog();
    })
}