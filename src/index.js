import { render } from "./modules/render";
import { addUsers } from "./modules/addUsers";
import { removeUsers } from "./modules/removeUsers";
import { UserService } from "./modules/userServise";
import { changePermissions } from "./modules/changePermissions";
import { editUsers } from "./modules/editUsers";
import { filterUsers } from "./modules/filterUsers";
window.userService = new UserService();
userService.getUsers().then((data) => {
  render(data);
});

addUsers();
removeUsers();
changePermissions();
editUsers();
filterUsers();
