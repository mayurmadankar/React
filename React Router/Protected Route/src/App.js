import "./styles.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // High-level ProtectedRoute component
  const ProtectedRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/" replace />; // Redirect to home if not logged in
    }
    return children; // Render the protected content
  };

  // Protect the routes for the contact, list, and item details pages
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home loggedIn={isLoggedIn} setLoggedin={setIsLoggedIn} />
        },
        {
          path: "/contact",
          element: (
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Contact />
            </ProtectedRoute>
          )
        },
        {
          path: "/list",
          children: [
            {
              index: true,
              element: (
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <List />
                </ProtectedRoute>
              )
            },
            {
              path: ":itemId",
              element: (
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <ItemDetails />
                </ProtectedRoute>
              )
            }
          ]
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
