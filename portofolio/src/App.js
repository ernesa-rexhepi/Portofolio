import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Home />
   ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer />
    </>
  );
}

export default App;
