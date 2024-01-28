import { Provider } from "react-redux";
import Students from "./Components/Students";
import { ChakraProvider } from "@chakra-ui/react";
import Store from "./App/store";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Components/Header";

import AddEdit from "./Components/AddEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Students />,
      },
      {
        path: "/create",
        element: <AddEdit />,
      },
      {
        path: "/edit/:id",
        element: <AddEdit />,
      },
    ],
  },
]);

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Provider store={Store}>
      <ChakraProvider>
        <Header />
        <Outlet />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
