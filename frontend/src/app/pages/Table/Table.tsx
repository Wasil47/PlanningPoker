import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Table.scss';

function Table() {
  const { tableId } = useParams();
  const [playerState, setPlayerState] = useState<PlayerState>({ selectedCard: null, name: 'PlayerName' });
  const [cards, setCards] = useState<PlayerState[]>([]);
  const [lastGame, setLastGame] = useState<number>();

  const onRevealCards = (): void => {
    if (!cards?.length) return;
    const cardCount = cards.reduce((pre, curr) => {
      const selectedCard = parseInt(curr.selectedCard || '0') || 0; // todo '?'
      return pre + selectedCard;
    }, 0);
    const gameResult = cardCount / cards.length;
    setLastGame(gameResult);
    setPlayerState({ ...playerState, selectedCard: null });
    setCards([]);
  };

  const onSelectCard = (event: React.MouseEvent<HTMLElement>): void => {
    const selectedValue = event.currentTarget.textContent;
    const { selectedCard } = playerState;
    const newValue = selectedCard !== selectedValue ? selectedValue : null;
    const newPlaterState = { ...playerState, selectedCard: newValue };
    setPlayerState(newPlaterState);
    setCards(newValue ? [newPlaterState] : []);
  };

  return (
    <div className="Table">
      <header>
        <h1>Table id: {tableId}</h1>
        <Link to="/" className="btn btn-primary">
          backHome
        </Link>
      </header>

      <div className="table-wrapper">
        <div className="table table-left"></div>
        <div className="table table-top"></div>
        <div className="table table-right"></div>
        <div className="table table-middle">
          {cards.length ? (
            <button type="button" className="btn btn-primary" onClick={onRevealCards}>
              Reveal cards
            </button>
          ) : (
            <p>{typeof lastGame === 'number' ? `Result of the last game: ${lastGame}` : 'Pick your cards!'}</p>
          )}
        </div>
        <div className="table table-bottom">
          <div className="table table-player">
            <div className="Player">
              <div className="player-wrapper">
                <div className={`player-card${playerState.selectedCard ? ' selected' : ''}`}></div>
                <div className="player-name">PlayerName</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards-wrapper">
        <button type="button" className="btn btn-primary" onClick={event => onSelectCard(event)}>
          <span>1</span>
        </button>
        <button type="button" className="btn btn-primary" onClick={event => onSelectCard(event)}>
          <span>13</span>
        </button>
        <button type="button" className="btn btn-primary" onClick={event => onSelectCard(event)}>
          <span>?</span>
        </button>
      </div>
    </div>
  );
}

interface PlayerState {
  name: string;
  selectedCard: string | null;
}

export default Table;
