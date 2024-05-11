import { render } from "./render";
export const removeUsers = () => {
  const tBody = document.getElementById("table-body");
  tBody.addEventListener("click", (event) => {
    if (event.target.closest(".btn-remove")) {
      const tr = event.target.closest("tr");
      const id = tr.dataset.key;
      userService.sendData('DELETE', undefined, `http://localhost:4545/users/${id}`).then(res => {
                userService.getData().then(users => {
                    render(users);
                });
            });
    }
  });
};
