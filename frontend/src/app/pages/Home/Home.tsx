import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <header>
        <h1 className="Home-header text-center">Planning Poker for estimating stories&tasks</h1>
        <h2>in agile development teams</h2>
      </header>
      <div className="d-grid gap-4 col-3 mx-auto py-4">
        <Link to="/newtable" className="btn btn-primary">
          Create new table
        </Link>
        <Link to="/tables" className="btn btn-primary">
          Show my tables
        </Link>
        <Link to="/testTable" className="btn btn-primary">
          Test table
        </Link>
      </div>
    </div>
  );
}

export default Home;
