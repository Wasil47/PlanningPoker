import { Link, useParams } from 'react-router-dom';
import './Table.scss';

function Table() {
  const { tableId } = useParams();

  const cards: number[] = [1];

  const onClick = (): void => {
    console.log('count down');
    console.log('show cards');
  };

  return (
    <div className="Table">
      <header>
        <h1>Table id: {tableId}</h1>
        <Link to="/" className="btn btn-primary">
          backHome
        </Link>
      </header>

      <div className="table">
        <div className="table-left"></div>
        <div className="table-top"></div>
        <div className="table-right"></div>
        <div className="table-middle">
          {cards.length ? (
            <button type="button" className="btn btn-primary" onClick={onClick}>
              Reveal cards
            </button>
          ) : (
            <p>Pick your cards!</p>
          )}
        </div>
        <div className="table-bottom"></div>
      </div>
    </div>
  );
}

export default Table;
