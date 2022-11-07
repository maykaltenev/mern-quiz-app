
import '../styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/* import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
/* react routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Main></Main></div>
  },
  {
    path: '/quiz',
    element: <div><Quiz></Quiz></div>
  },
  {
    path: '/result',
    element: <div><Result></Result></div>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
