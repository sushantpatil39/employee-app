import axios from "axios";

export default axios.create({
    baseURL: "https://localhost:7001",
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',//http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      }
});