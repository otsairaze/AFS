import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { MainLayout } from './layouts';
import { routes } from './routes';
import OrganizationPage from './pages/OrganizationPage';

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
      </Routes>
    </Router>
  );
}

export default App;
