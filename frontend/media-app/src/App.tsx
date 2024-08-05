import { Route, Routes } from "react-router-dom";
import SignUpForm from "./_auth/forms/SignUpForm";
import SignInForm from "./_auth/forms/SignInForm";

import { Home } from "./_root/pages";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = ()=>{
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<SignUpForm />}/>
          <Route path="/sign-in" element={<SignInForm />} />
        </Route>
        
        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App;