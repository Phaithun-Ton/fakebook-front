import { Route, Routes } from "react-router-dom";
import PublicLayout from "../components/layouts/PubilcLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default RouteConfig;