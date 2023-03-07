import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css';
import { routes } from './routes';
import { Suspense, useEffect } from 'react';
import Layout from './components/Layout';
import PrivateRoutes from './components/Auth/PrivateRoutes';
import Page404 from './pages/Page404';
import Login from './pages/Login';
import { initialize } from './utils/appUtils';
import { ThemeContextProvider } from './context/themeContext';

const pages = routes.map((route, index) => <Route path={route.path} element={<route.component {...route.props}/>} key={index} />)

function App() {
  useEffect(() => {
    initialize()
  }, [])
  return (
    /*Note: The protected routes are wrapped with 
      the <PrivateRoutes> component (i.e users must be 
      authenticated to access this routes)
    
      Other routes that do not need authentication is
      declared directly below using the self closing <Route />
      component. e.g Login Page, Landing Page
    */
   <ThemeContextProvider>
    <Routes>
      <Route path='/' element={
              <PrivateRoutes>
                <Layout>
                  <Suspense fallback={<div>Preloading...</div>}>
                    <Outlet />
                  </Suspense>
                </Layout>
              </PrivateRoutes>
          }>
            {pages}
      </Route>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<Page404 />} />
    </Routes>
  </ThemeContextProvider>
  );
}

export default App;
