import React from "react";
import Profile from "../components/account/Profile";
import Layout from "../components/Layout/Layout";
import Kyc from "../components/account/Kyc";

const Account = () => {
  return (
    <Layout>
      <Profile />
      <Kyc />
    </Layout>
  );
};

export default Account;
