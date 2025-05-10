// js file to handle the interactions with the DOM

export function createElement(elementType, className, idName, text) {
    const element = document.createElement(`${elementType}`);
    if (className) {
        element.classList.add(`${className}`);
    }
    if (idName) {
        element.id = `${idName}`;
    }
    element.textContent = text;
    return element;
}

export function selectElement(element) {
    const selectedElement = document.querySelector(`${element}`);
    return selectedElement;
}

export function createItemDiv() {
    const itemDiv = document.createElement('div');
    itemDiv.id = 'item-div';
    return itemDiv;
}