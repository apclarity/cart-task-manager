import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./app/router";
import Navbar from "./components/Navbar";
import { BrowserRouter, useLocation } from "react-router-dom";
import OverlayLoading from "./components/OverlayLoading";

const queryClient = new QueryClient();

const AppContent = () => {
  const { pathname } = useLocation();
  const hideNavbarOn = ["/login", "/register"];
  const showNavbar = !hideNavbarOn.includes(pathname);

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      {loading && <OverlayLoading />}
      
      {showNavbar && <Navbar setLoading={setLoading} />}
      <Router />
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
     <BrowserRouter>  
        <AppContent />    
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
