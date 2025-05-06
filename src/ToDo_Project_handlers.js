import { ToDoItem } from "./classes";
import { format } from "date-fns";
// import { addItemToSidebar } from "./sidebar";

// Function to display a prompt for adding a new project
export function showItemDialog() {
    const itemDialog = document.querySelector('#item-dialog');
    itemDialog.showModal();

}

export function addItemToArray() {
    const itemTitle = document.querySelector('#item-title-input').value;
    const itemDueDate = document.querySelector('#item-duedate-input').value;
    const newItem = new ToDoItem(false, itemTitle, itemDueDate);
    itemTable.push(newItem);
}

export function refreshItemList() {
    itemTable.forEach(element => {
        const itemsList = document.querySelector('.items-list');
        const item = document.createElement('div');
        const itemListNoHeader = document.querySelector('.items-list-content');
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

        // Create a remove button for each project
        const removeItemBtn = document.createElement('p');
        removeItemBtn.classList.add('remove-item-btn');
        removeItemBtn.textContent = 'X';
        item.appendChild(removeItemBtn);
        
        // Event: click on the X to remove the project from the table
        removeItemBtn.addEventListener('click', () => {
            removeItemFromTable(element);
            const content = document.querySelector('.items-list-content');
            content.innerHTML = '';
            refreshItemList();
        })

        // Add the project to the sidebar
        // addItemToSidebar();
    });
}

function removeItemFromTable(item) {
    const confirmDelete = confirm('Are you sure you want to remove this item?');
    if (confirmDelete) {
        const id = itemTable.findIndex(item => item.id === item.id);
        if (id !== -1) {
            itemTable.splice(id, 1);
        }
    }
}