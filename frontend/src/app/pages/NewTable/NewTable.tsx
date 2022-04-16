import { Link } from 'react-router-dom';
import './NewTable.scss';

function NewTable() {
  return (
    <div className="NewTable">
      <h1>NewTable</h1>
      <Link to="/" className="btn btn-primary">
        backHome
      </Link>
    </div>
  );
}

export default NewTable;
