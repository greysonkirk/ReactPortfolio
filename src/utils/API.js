 
import axios from "axios";

export default {
 
  getProjects: function() {
    return axios.get("https://api.github.com/users/greysonkirk/repos");
  } 
};
