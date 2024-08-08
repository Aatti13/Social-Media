// IMPORTS

// 1. Pre-existing Libraries
import { Route, Routes } from "react-router-dom";

// 2. User Libraries

// 2(a). User-Auth Forms
import SignUpForm from "./_auth/forms/SignUpForm";
import SignInForm from "./_auth/forms/SignInForm";

// 2(b). Dashboard pages (On logging-in)
import { Home } from "./_root/pages";

/* 2(c). Layouts for different aspects 
    i. Auth-Layout
    ii. Root-Layout
*/
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

/* App Init.

    1. ROUTES
    a. Public Routes:
      Sign-Up --> /sign-up
      Sign-In --> /sign-in 
    
    b. Private Routes (Accessible after successful Auth.)
      Home --> /
*/
const App = ()=>{
  return (
    // Main Segment
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