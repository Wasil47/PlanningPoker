import { Link, useParams } from 'react-router-dom';

function Table() {
  const { tableId } = useParams();

  console.log(tableId);

  return (
    <div className="Table">
      <h1>Table</h1>
      <Link to="/" className="btn btn-primary">
        backHome
      </Link>
    </div>
  );
}

export default Table;
