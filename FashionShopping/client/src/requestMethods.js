import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTA0NmU4ZjAxNjQ1YzQyNzY4MjFmOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTQyODI0NSwiZXhwIjoxNjQ5Njg3NDQ1fQ.p2MLVDRlc102-DLgAjxqrQpXKFfXbC7V3FTPBri6JfA";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `${TOKEN}` },
});
