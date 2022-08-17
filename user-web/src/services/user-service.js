import http from "../http-common";

const API_BASE = "users/";
function UserDataService() {
  const getAllUsers = () => {
    return http.get(API_BASE);
  };
  const getUser = (id) => {
    return http.get(`${API_BASE}${id}`);
  };
  const createUser = function (data) {
    return http.post(API_BASE, data);
  };
  const updateUser = (id, data) => {
    return http.put(`${API_BASE}${id}`, data);
  };
  const deleteUser = (id) => {
    return http.delete(`${API_BASE}${id}`);
  };

  const findByName = (name) => {
    return http.get(`${API_BASE}?name=${name}`);
  };
}
export default UserDataService;
