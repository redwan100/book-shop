import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container mx-auto lg:w-[85%]">
     <Header />
     <Outlet />
    </div>
  );
}

export default App
