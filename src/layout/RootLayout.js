import { Outlet } from "react-router";
import Header from "../components/Header";
import TaskProvider from "../store/TaskProvider";

const RootLayout = () => {
  return (
    <TaskProvider>
      <Header />
      <Outlet />
    </TaskProvider>
  );
};

export default RootLayout;
