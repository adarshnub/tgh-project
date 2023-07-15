
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Quote from './components/Quote';
import Home from './components/Home';
import Bookmark from './components/Bookmark';
import RootLayout from './components/RootLayout';


function App() {

    const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route index element={<Home />} ></Route>
        <Route path='/bookmark' element={<Bookmark />} ></Route>
      </Route>
    ))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
