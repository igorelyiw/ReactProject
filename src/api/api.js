import * as axios from 'axios';

export const usersAPI=()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>response.data)
}
 