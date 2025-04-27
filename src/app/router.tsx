import { Routes, Route, Navigate } from "react-router-dom";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { ReactNode } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TaskManagement from "../pages/Tasks";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart"; 
import Home from "../pages/Home";  
import NotFound from "../pages/NotFound";
import OverlayLoading from "../components/OverlayLoading";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const Router: React.FC = () => {
  const isFetching = useIsFetching();  
  const isMutating = useIsMutating(); 
  const isLoading = isFetching > 0 || isMutating > 0;

  return (
    <>
      {isLoading && <OverlayLoading />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<ProtectedRoute><TaskManagement /></ProtectedRoute>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
