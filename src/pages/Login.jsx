import React from "react";
import Template from "../components/Auth/Template";
import Navbar from "../components/common/Navbar";
const Login = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <Template
        title="Welcome Back"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        formType="login"
      />
    </div>
  );
};

export default Login;
