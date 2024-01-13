import { Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<PublicRoute element={<Login />} />} />
    </Routes>
  );
}

export default AllRoutes;
