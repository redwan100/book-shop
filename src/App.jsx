import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname === '/'){
      document.title = 'NEXT - Home'
    }else{
        document.title = `NEXT${location.pathname.replace("/", "-")}`;
    }

    if(location.state){
      document.title = location.state;
    }
     
  },[location.pathname])
  
  return (
    <div className="container mx-auto lg:w-[85%]">
     <Header />
     <Outlet />
    </div>
  );
}

export default App
