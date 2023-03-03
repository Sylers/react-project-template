import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css';
import { routes } from './routes';
import { Suspense } from 'react';
import Layout from './components/Layout';
import PrivateRoutes from './components/Auth/PrivateRoutes';
import _404 from './pages/_404';

const pages = routes.map((route, index) => <Route path={route.path} element={<route.component {...route.props}/>} key={index} />)
const Login = () => 'Login'
function App() {
  return (
    /*Note: The protected routes are wrapped with 
      the <PrivateRoutes> component (i.e users must be 
      authenticated to access this routes)
    
      Other routes that do not need authentication is
      declared directly below using the self closing <Route />
      component. e.g Login Page, Landing Page
    */
    <Routes>
      <Route path='/' element={
              <PrivateRoutes>
                <Layout>
                  <Suspense fallback={''}>
                    <Outlet />
                  </Suspense>
                </Layout>
              </PrivateRoutes>
          }>
            {pages}
      </Route>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<_404 />} />
    </Routes>
  );
}

export default App;
