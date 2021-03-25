import * as axios from 'axios';

export const usersAPI=()=>{
  return  axios.get('https://jsonplaceholder.typicode.com/users').then(response=>response.data)
}
 