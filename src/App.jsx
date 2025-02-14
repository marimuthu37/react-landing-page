import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout'; 
import About from './About';
import Places from './Places';
import Home from './Home';
import TravelForm from './TravelForm';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {path: '/', element: <Home />},
      { path: 'about', element: <About /> }, 
      { path: 'places', element: <Places /> },
      {path: 'book',element:<TravelForm />},
      {path: '*', element: <h1>Not Found</h1>}
    ]
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;

