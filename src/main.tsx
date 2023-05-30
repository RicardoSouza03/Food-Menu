import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ByCatergory from './Pages/Category.tsx';
import AllCategories from './Pages/AllCategories.tsx';
import MealPage from './Pages/MealPage.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllCategories />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/category/:categoryName",
    element: <ByCatergory />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/meal/:mealId",
    element: <MealPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
