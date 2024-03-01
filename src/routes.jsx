import { Suspense, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import AuthGuard from "./layouts/guards/AuthGuard";
import GuestGuard from "./layouts/guards/GuestGuard";
import MainLayout from "./layouts/MainLayout/MainLayout";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

export const RenderRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((route, i) => {
          const Component = route.component;
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;

          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Guard>
                  <Layout>
                    <Component />
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

const routes = [
  {
    exact: true,
    path: "/login",
    component: Login,
    guard: GuestGuard,
  },
  {
    exact: true,
    path: "/register",
    component: Register,
    guard: GuestGuard,
  },
  {
    exact: true,
    path: "/",
    component: Home,
    guard: GuestGuard,
    layout: MainLayout,
  },
  {
    exact: true,
    path: "*",
    component: NotFound,
    guard: AuthGuard,
    layout: MainLayout,
  },
];

export default routes;
