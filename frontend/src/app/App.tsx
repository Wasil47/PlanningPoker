import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NewTable from './pages/NewTable';
import Table from './pages/Table';
import TableList from './pages/TableList';

function App() {
  return (
    <main className="container-xxl">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newtable" element={<NewTable />} />
          <Route path="/tables" element={<TableList />} />
          <Route path="/:tableId" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
