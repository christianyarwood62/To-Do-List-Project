export function showSideBar() {
    const sideBarDiv = document.querySelector('#sidebar');
    const sideBarTitle = document.createElement('h2');
    sideBarTitle.textContent = 'Projects';
    sideBarDiv.appendChild(sideBarTitle); 
}