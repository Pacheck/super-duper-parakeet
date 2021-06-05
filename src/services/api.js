import axios from "axios";

const Axios =  axios.create({
    baseURL: 'https://opentdb.com/api.php'
})

export default Axios;