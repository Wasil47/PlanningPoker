import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import NewTable from './pages/NewTable';
import Table from './pages/Table';
import TableList from './pages/TableList';

function App() {
  return (
    <BrowserRouter>
      <main className="container-xxl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newtable" element={<NewTable />} />
          <Route path="/tables" element={<TableList />} />
          <Route path="/:tableId" element={<Table />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
