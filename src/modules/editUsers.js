import { render } from "./render";
export const editUsers = () => {
  const form = document.querySelector("form");
  const nameImput = document.querySelector("#form-name");
  const emailImput = document.querySelector("#form-email");
  const childrenImput = document.querySelector("#form-children");
  const tBody = document.getElementById("table-body");

  tBody.addEventListener("click", (event) => {
    if (event.target.closest(".btn-edit")) {
      const tr = event.target.closest("tr");
      const id = tr.dataset.key;
      console.log(id);
      userService.getUser(id).then((user) => {
        (nameImput.value = user.name),
          (emailImput.value = user.email),
          (childrenImput.checked = user.children);
          form.dataset.metod=id
        
      });
    }
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
if(form.dataset.metod){
    const id=form.dataset.metod
    const user = {
        name: nameImput.value,
        email: emailImput.value,
        children: childrenImput.checked,
        permissions: false,
      };

      userService.editUser(id,user).then(() => {
        userService.getUsers().then((users) => {
          render(users);
          form.reset();
          form.removeAttribute('data-metod');
        });
      });
}
   
  });
};
