import axios from "axios";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  "Content-type": "application/json",
};

export default axios.create({
  baseURL: "http://localhost:8080/",
  headers: headers,
});
