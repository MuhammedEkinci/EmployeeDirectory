import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=75&nat=us";

export default {
  getEmployees: ()=> axios.get(BASEURL)
};