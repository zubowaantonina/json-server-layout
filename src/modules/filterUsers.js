export const filterUsers=() => {
   
  const btnIsChildren=document.getElementById('btn-isChildren')
  const btnIsPermissions=document.getElementById('btn-isPermissions')
  const btnIsAll=document.getElementById('btn-isAll')
  btnIsChildren.addEventListener('click', () => {
    userService.filterUsers("children").then((users) => {
        console.log(users);
        // render(users);
        // form.reset();
      });
    console.log(btnIsChildren);
  })
  btnIsPermissions.addEventListener('click', () => {
    console.log(btnIsPermissions);
  })
  btnIsAll.addEventListener('click', () => {
    console.log(btnIsAll);
  })
}