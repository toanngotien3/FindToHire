import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages';
import { UserDetail, Users } from './pages/users';

function App() {

  return <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="/users/:username" element={<UserDetail />} />
      </Route>
    </Routes>
  </Router>
}

export default App
