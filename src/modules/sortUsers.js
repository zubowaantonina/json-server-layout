import { render } from "./render"
export const sortUsers = () => {
    const headerSortIsChildren = document.getElementById("sort-is-children");
    let isSort = false;
    headerSortIsChildren.style.cursor = "pointer";
    headerSortIsChildren.addEventListener("click", () => {
        userService.getSortUsers('children').then((users) => {
            render(users);
            console.log(users);
          });
        // userService.getSortUsers({
        //         name: "children",
        //         value: isSort ? "asc" : "desc",
        //     })
        //     .then((users) => {
        //         console.log(users);
        //     });
            isSort = !isSort;
        
    });
};
