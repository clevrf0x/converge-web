import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './pages/layout/appLayout';
import AuthLayout from './pages/layout/authLayout';
import Home from './pages/home';
import Login from './pages/auth/login';
import PageNotFound from './pages/errors/404';
import { useState } from 'react';

function App() {
  const [ authenticated, setAuthenticated ] = useState(false);
  return (
    <>
      <BrowserRouter>
        {/* Authenticated user paths */}
        {authenticated && (
          <Routes>
            <Route path='/' element={<AppLayout />}>
              <Route index={true} element={<Home />} />
              <Route path='*' element={<PageNotFound />} />
            </Route>
          </Routes>
        )}

        {/* Unauthenticated user paths */}
        {!authenticated && (
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index={true} element={<Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<PageNotFound />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
