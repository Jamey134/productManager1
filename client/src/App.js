
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Update from './views/Update';
import Dashboard from './views/Dashboard';
import ViewOne from './views/ViewOne';

function App() {
  return (
    <div className="App">
      <h1>Product Manager App</h1>
      <Link to={"/"}>Dashboard</Link>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path="/product/:id" element={<ViewOne />} ></Route>
      </Routes>

    </div>
  );
}

export default App;