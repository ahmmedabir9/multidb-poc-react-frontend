import React, { useEffect, useState } from "react";
import { GetAllCustomers } from "../service/service";
import "./Contact.css";
export default function Table({ org, customers, setCustomers }) {
  const [loading, setLaoding] = useState(true);

  const getData = async () => {
    setLaoding(true);
    const response = await GetAllCustomers();

    console.log(response);

    if (response?.status) {
      setCustomers(response?.data);
    }
    setLaoding(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <h5>LOADING...</h5>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((item) => (
              <tr>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
