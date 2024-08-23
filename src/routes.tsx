import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

const routes = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </>
  )
);

export default routes;
