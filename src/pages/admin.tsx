import React, { useState } from "react";
import Layout from "../Layout/Index";
import { OidcSecure } from "@axa-fr/react-oidc";

const Admin = () => {
  const [users, setUsers] = useState("");

  fetch("http://localhost:9001/UserAccountSA/getUsers?page=0&keywords")
    .then((response) => response.json())
    .then((data) => console.log("data: ", data));
  return (
    <OidcSecure>
      <Layout>Admin: {users}</Layout>{" "}
    </OidcSecure>
  );
};

export default Admin;
