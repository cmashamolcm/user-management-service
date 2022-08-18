import http from "../http-common";

const API_BASE = "users/";
const getAllUsers = (page, size, search) => {
  let url = `${API_BASE}page?page=${page}&size=${size}`;
  url += search ? `&searchName=${search}` : "";
  return http.get(url);
};
const getUser = (id) => {
  return http.get(`${API_BASE}${id}`);
};
const createUser = function (data) {
  return http.post(API_BASE, data);
};
const updateUser = (data) => {
  return http.put(`${API_BASE}`, data);
};
const deleteUser = (id) => {
  return http.delete(`${API_BASE}${id}`);
};

const findByName = (name) => {
  return http.get(`${API_BASE}?name=${name}`);
};

export { getAllUsers, createUser, getUser, updateUser, deleteUser };
