import HomePage from './page/HomePage';
import { element } from 'prop-types';

import ErrorPage from './ErrorPage';
const routes = [
  { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
];
export default routes;
