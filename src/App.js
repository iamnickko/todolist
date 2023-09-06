import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Active from "./pages/Active";
import RootLayout from "./layout/RootLayout";
import Complete from "./pages/Complete";
import Archive from "./pages/Archive";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Active /> },
        { path: "/complete", element: <Complete /> },
        { path: "/archive", element: <Archive /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
