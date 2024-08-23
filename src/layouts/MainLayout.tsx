import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
