import axios from 'axios'
const dataFile = "./data.json";

export default props =>  {
    return axios.get('data.json')
    .then((response) => {
        return response.data;
        
    })
    .catch((err) => {
        return 'error'
    })   
}