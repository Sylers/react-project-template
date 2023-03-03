import { lazy } from 'react';
/* 
The protected routes for the application is defined here 
{
    path: it takes the route to the page.
    name: (optional) - name of the page
    component: (component to be rendered when the path is loaded)
}
*/
const Dashboard = lazy(
  () => import(/* webpackChunkName: "Dashboard" */ './pages/Dashboard')
);

export const routes = [{
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    rest: {}
}]