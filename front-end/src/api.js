import axios from "axios";

const conneciton = axios.create({
    baseURL: "http://localhost:3003/"
});

export default conneciton;