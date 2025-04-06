import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { MainLayout } from './layouts';
import { routes } from './routes';
import { OrganizationPage, SearchPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={routes.home} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path={routes.organization} element={<OrganizationPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path={routes.search} element={<SearchPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
