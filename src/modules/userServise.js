

export class UserService {
    getUsers() {
        return fetch('http://localhost:4545/users').then(res => res.json());
    };


    addUser(user){
        return fetch('http://localhost:4545/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res => res.json());
    }
   removeUser(id){
return fetch(`http://localhost:4545/users/${id}`,{
    method: 'DELETE',
}).then(res => res.json());
   }
}
