// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Table from "./Components/Table";
import { GetOrgDetailsByDomain } from "./service/service";
import setOrgToken from "./service/setOrgToken";

function App() {
  const [loading, setLoading] = useState(true);
  const [org, setOrg] = useState(null);
  const [customers, setCustomers] = useState([]);

  const getSiteSetting = async () => {
    setLoading(true);
    const siteURL = window.location.href.split("/")[2];
    const response = await GetOrgDetailsByDomain(siteURL);
    console.log(response);
    if (response?.status) {
      setOrg(response?.data);
      setOrgToken(response.data.token);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSiteSetting();
  }, []);

  return loading ? (
    <h2>LOADING...</h2>
  ) : (
    <>
      <Contact org={org} customers={customers} setCustomers={setCustomers} />
      <Table org={org} customers={customers} setCustomers={setCustomers} />
    </>
  );
}

export default App;
