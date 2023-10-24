import { loadWebbridge, WebbridgeProvider } from "@tapcart/webbridge-react";
import MainMenuUS from "./MainMenuUS";
import MainMenuCA from "./MainMenuCA";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

const webbridgeClient = loadWebbridge({ test: false });
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>
  },
  {
    path: "/app/9NdGj8dBAo", //US APP ID
    element: <MainMenuUS />
  },
  {
    path: "/app/7AZ0w8dH9S",
    element: <MainMenuCA />
  },
  {
    path: "/app/9NdGj8dBAo/:id", //US APP ID
    element: <MainMenuUS />
  },
  {
    path: "/app/7AZ0w8dH9S/:id",
    element: <MainMenuCA />
  }
]);
function App() {
  return (
    <WebbridgeProvider webbridgeClient={webbridgeClient}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </WebbridgeProvider>
  );
}

export default App;
