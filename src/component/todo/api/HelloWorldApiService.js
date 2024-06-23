import { apiClient } from "./ApiClient";

export const retriveHelloWorldBean = () => apiClient.get("/hello-world-bean");

export const retriveHelloWorldPathBean = (username, token) =>
  apiClient.get(`/hello-world/path-variable/${username}`);


