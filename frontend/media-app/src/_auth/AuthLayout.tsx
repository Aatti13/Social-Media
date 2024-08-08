// IMPORT 

// 1. Pre-defined Library
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// 2. Auth Layout Functional component
const AuthLayout: React.FC = ()=>{
  const authAStatus=false;
  return (
    <>
      {authAStatus ? (
        <Navigate to='/' />
      ):(
        <>
          <img src="./images/login page.jpg" alt="logo" 
          className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"/>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout;