import { createBrowserRouter } from 'react-router-dom';
import { AuthScreen, HomeScreen } from '../pages';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />
  },
  {
    path: '/auth',
    element: <AuthScreen />
  }
])

export default router