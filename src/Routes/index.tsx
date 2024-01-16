import { Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../views/Dasboard";
import AddBook from "../views/Books/AddBook";
import EditBook from "../views/Books/EditBook";
import PageNotFound from "../views/PageNotfound";

function AllRoutes() {
  return (
    <Routes>
      <Route path='*' element={<PageNotFound />} />
      <Route path="/" element={<PublicRoute element={<Login />} />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<PublicRoute element={<Login />} />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      <Route path="/add-book" element={<PrivateRoute element={<AddBook />} />} />
      <Route path="/edit-book/:id" element={<PrivateRoute element={<EditBook />} />} />
    </Routes>
  );
}

export default AllRoutes;
