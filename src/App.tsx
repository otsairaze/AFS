import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { MainLayout } from './layouts';
import { routes } from './routes';
import Organization from './pages/Organization';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={routes.home} element={<Organization />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
