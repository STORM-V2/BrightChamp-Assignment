import React, { useState } from 'react';
import './cardgame.css';
import Apple from '../images/apple.jpg';
import Cherry from '../images/cherries.jpg';
import Orange from '../images/orange.jpg';
import Mango from '../images/mango.jpg';
import Pineapple from '../images/pineapple.jpg';
import Watermelon from '../images/watermelon.jpg';
import Aa from '../images/A.jpg';
import Cc from '../images/C.jpg';
import Oo from '../images/O.jpg';
import Mm from '../images/M.jpg';
import Pp from '../images/P.jpg';
import Ww from '../images/W.jpg';

function CardGame({ onMatch }) {
    const cards = [
        { id: 1, image: Apple, pairId: 7 },
        { id: 2, image: Cherry, pairId: 8 },
        { id: 3, image: Orange, pairId: 9 },
        { id: 4, image: Mango, pairId: 10 },
        { id: 5, image: Pineapple, pairId: 11 },
        { id: 6, image: Watermelon, pairId: 12 },
        { id: 7, image: Aa, pairId: 1 },
        { id: 8, image: Cc, pairId: 2 },
        { id: 9, image: Oo, pairId: 3 },
        { id: 10, image: Mm, pairId: 4 },
        { id: 11, image: Pp, pairId: 5 },
        { id: 12, image: Ww, pairId: 6 }
    ];

    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [showOverlay, setShowOverlay] = useState(false);

    const handleCardClick = (id) => {
        if (flippedCards.length === 2 || matchedCards.includes(id)) {
            return;
        }

        const newFlippedCards = [...flippedCards, id];

        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            const [firstCard, secondCard] = newFlippedCards;
            const firstCardData = cards.find(card => card.id === firstCard);
            const secondCardData = cards.find(card => card.id === secondCard);

            if (firstCardData.pairId === secondCard) {
                setMatchedCards([...matchedCards, firstCard, secondCard]);
                onMatch(); // Notify parent component of a match
                setShowOverlay(true);
                setTimeout(() => setShowOverlay(false), 2000); // Hide after 2 seconds
            }

            setTimeout(() => setFlippedCards([]), 1000);
        }
    };

    return (
        <div className="card-game">
            {showOverlay && (
                <div className='overlay-text visible'>
                    It's a MATCH !!!
                </div>
            )}
            <div className="card-group mt-5">
                <div className="card-row mt-5">
                    {cards.slice(0, 6).map(card => (
                        <div
                            className={`card m-4 ${flippedCards.includes(card.id) ? 'visible' : ''}`}
                            key={card.id}
                            onClick={() => handleCardClick(card.id)}
                            style={{ visibility: matchedCards.includes(card.id) ? 'hidden' : 'visible' }}
                        >
                            <div className='lg card-back card-face'>
                                <div className="heart">❤</div>
                            </div>
                            <div className='card-front card-face'>
                                <img className='card-image' src={card.image} alt={`Card ${card.id}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="card-group mt-5">
                <div className="card-row mt-5">
                    {cards.slice(6, 12).map(card => (
                        <div
                            className={`card m-4 ${flippedCards.includes(card.id) ? 'visible' : ''}`}
                            key={card.id}
                            onClick={() => handleCardClick(card.id)}
                            style={{ visibility: matchedCards.includes(card.id) ? 'hidden' : 'visible' }}
                        >
                            <div className='rg card-back card-face'>
                                <div className="heart">❤</div>
                            </div>
                            <div className='card-front card-face'>
                                <img className='card-image' src={card.image} alt={`Card ${card.id}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardGame;