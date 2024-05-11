import { render } from "./render";

export const addUsers = () => {
  const form = document.querySelector("form");
  const nameImput = document.querySelector("#form-name");
  const emailImput = document.querySelector("#form-email");
  const childrenImput = document.querySelector("#form-children");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
if(!form.dataset.metod){
    const user = {
        name: nameImput.value,
        email: emailImput.value,
        children: childrenImput.checked,
        permissions: false,
      };
      userService.sendData('POST', user, 'http://localhost:4545/users').then(() => {
                userService.getData().then(users => {
                    render(users);
                    form.reset();
                });
            });
}
   
  });
};
