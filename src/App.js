import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Recipe from "./Pages/recipe";
import Recipes from "./Pages/recipes";

const router = createBrowserRouter([
  { path: "/", element: <Recipes /> },
  { path: "/recipes", element: <Recipes /> },
  { path: "/recipes/:id", element: <Recipe /> },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
