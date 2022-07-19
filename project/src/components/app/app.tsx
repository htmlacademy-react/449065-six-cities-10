import {Route, BrowserRouter, Routes} from 'react-router-dom';
import NotFound from '../../pages/404/notFound';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import {AppRoute} from '../../const';
import Main from '../../pages/main/main';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={<Main />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<Favorites />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Property />}
        />
        <Route
          path={'*'}
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
