import "./App.css";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Head />
        {/* <Body /> */}
      </div>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
