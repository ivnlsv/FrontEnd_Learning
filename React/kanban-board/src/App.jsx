import React from "react";
import { Layout } from "./Components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Board } from "./Components/Board/Board";
import { Card } from "./Components/Board/Card/Card";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { LayoutMain } from "./Components/Layout/Layout.styled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Board />,
  },
  {
    path: "/tasks/:cardId",
    element: <Card />,
  },
]);
function App() {
  return (
    <Layout>
      <Header />
      <LayoutMain>
        <RouterProvider router={router} />
      </LayoutMain>
      <Footer id={0} name={""} state={""} />
    </Layout>
  );
}

export default App;
//
