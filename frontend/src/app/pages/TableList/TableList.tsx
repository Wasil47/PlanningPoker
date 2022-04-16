import { Link } from 'react-router-dom';

function TableList() {
  return (
    <div className="Table">
      <h1>TableList</h1>
      <Link to="/" className="btn btn-primary">
        backHome
      </Link>
    </div>
  );
}

export default TableList;
