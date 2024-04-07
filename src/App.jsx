import { useEffect, useState } from 'react'
import './App.css'
import Home from './views/Home'
import Game from './views/Game'
import Footer from './componets/Footer'
import {Routes, Route, Navigate} from 'react-router-dom';

const cardImages = [
  {src: './cards/biscuit.webp', matched: false},
  {src: './cards/fly.webp', matched: false},
  {src: './cards/glitch.webp', matched: false},
  {src: './cards/ice.webp', matched: false},
  {src: './cards/kid.webp', matched: false},
  {src: './cards/hair.webp', matched: false},
  {src: './cards/roomba.webp', matched: false},
  {src: './cards/adobe.webp', matched: false}
]

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);

  useEffect(() => {
    if (cardOne && cardTwo) {
      setDisabled(true);
      if (cardOne.src === cardTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === cardOne.src){
              return {...card, matched: true}
            } else {
              return card;
            }
          })
        })

        newTurn();
      } else {
        setTimeout(() => newTurn(), 1000);
      }
    }
  },[cardOne, cardTwo])
  
  const cardSelected = (card) => {
    cardOne ? setCardTwo(card) : setCardOne(card);
  }
  
  const newTurn = () =>{
    setCardOne(null);
    setCardTwo(null);
    setTurns(turns + 1);
    setDisabled(false);
  }
  
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));
    setCards(shuffledCards);
    setTurns(0);
  }

  useEffect(() => {
    const adobe = new Image();
    adobe.src = './cards/adobe.webp';
    const biscuit = new Image();
    biscuit.src = './cards/biscuit.webp';
    const fly = new Image();
    fly.src = './cards/fly.webp';
    const glitch = new Image();
    glitch.src = './cards/glitch.webp';
    const hair = new Image();
    hair.src = './cards/hair.webp';
    const ice = new Image();
    ice.src = './cards/ice.webp';
    const kid = new Image();
    kid.src = './cards/kid.webp';
    const roomba = new Image();
    roomba.src = './cards/roomba.webp';
  }, []);

  return <div className='app'>
    <Routes>
      <Route path='/' element={<Home setAuthorized={setAuthorized} shuffleCards={shuffleCards}/>}/>
      <Route path='/game' element={ authorized ? <Game turns={turns} cardSelected={cardSelected} shuffleCards={shuffleCards} cards={cards} cardOne={cardOne} cardTwo={cardTwo} disabled={disabled}/> : <Navigate to='/'/>}/>
    </Routes>
    <Footer/>

  </div>
}

export default App;
