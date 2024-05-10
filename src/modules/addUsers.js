import { render } from "./render";

export const addUsers = () => {
    const form = document.querySelector("form");
    const nameImput = document.querySelector("#form-name");
    const emailImput = document.querySelector("#form-email");
    const childrenImput = document.querySelector("#form-children");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const user = {
           
            name: nameImput.value,
            email: emailImput.value,
            children: childrenImput.checked,
            permissions: false
        }
        // userService.addUser(user).then((user) => {
        //     userService.getUsers().then(users => {
        //         render(users)
        //     })
        // })
        console.log(user);
userService.addUser(user).then(() => {
    userService.getUsers().then(users => {
        render(users)
    })

})
    });
};
