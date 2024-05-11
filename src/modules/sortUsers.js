import { render } from "./render"
export const sortUsers = () => {
    const headerSortIsChildren = document.getElementById("sort-is-children");
    let isSort = false;
    headerSortIsChildren.style.cursor = "pointer";
    headerSortIsChildren.addEventListener("click", () => {
        userService.getData(`http://localhost:4545/users?_sort=children&_order=${isSort ? 'asc' : 'desc'}`)
        .then(users => render(users));       
        isSort = !isSort;
        
    });
};
