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

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllCategories />,
  },
  {
    path: "/category/:categoryName",
    element: <ByCatergory />,
  },
  {
    path: "/meal/:mealId",
    element: <MealPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
