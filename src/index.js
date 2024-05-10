import { render } from "./modules/render";
import { addUsers } from "./modules/addUsers";
import { UserService } from "./modules/userServise";


window.userService=new UserService();
userService.getUsers().then(data => {
    render(data);
})

addUsers();