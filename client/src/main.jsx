import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import PitSearch from './pages/SearchResults.jsx';
import Adopt from './pages/Adopt.jsx';
import News from './pages/News.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: 'search',
        element: <PitSearch />
      }, {
        path: 'searchResults',
        element: <PitSearch />
      }, {
        path: 'adopt',
        element: <Adopt />
      }, {
        path: 'news',
        element: <News />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
