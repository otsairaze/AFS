import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { routes } from './routes';
import Organization from './pages/Organization';
import { MainLayout } from './layouts';

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
