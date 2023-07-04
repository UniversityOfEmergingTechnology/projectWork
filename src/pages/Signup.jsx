import React from "react";
import Template from "../components/Auth/Template";
import Navbar from "../components/common/Navbar";
const Login = () => {
  return (
    <>
      <Navbar />
      <Template
        title="Join the thriving community mastering coding for free with Educraft."
        description1="Crafting competencies for the present, future, and beyond."
        description2="Securing your career with future-focused education"
        formType="signup"
      />
    </>
  );
};

export default Login;
