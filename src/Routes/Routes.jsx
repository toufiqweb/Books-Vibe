import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetail from "../Pages/BookDetail/BookDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/bookDetails/:bookParamsId",
        loader: () => fetch("/booksData.json"),
        Component: BookDetail,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
