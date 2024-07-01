import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://todo-app-backend-env.eba-yefepmj3.ap-south-1.elasticbeanstalk.com",
});
