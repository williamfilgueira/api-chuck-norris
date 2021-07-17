import axios from 'axios'; //instalo a dependencia e importo ela

const api = axios.create({  //crio uma constante e atribuo a ela o axios.create
    baseURL:'https://api.chucknorris.io/'//add a url base da api
});

export default api; //exporto a mesma