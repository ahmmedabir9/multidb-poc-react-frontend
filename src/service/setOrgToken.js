import axios from "axios";

const setOrgToken = (token) => {
  if (token) {
    axios.defaults.headers.common["orgtoken"] = token;
  } else {
    axios.defaults.headers.common["orgtoken"] = "";
  }
};

export default setOrgToken;
