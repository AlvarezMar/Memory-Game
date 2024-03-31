import { useEffect, useState } from 'react'
import './App.css'
import Home from './views/Home'
import Game from './views/Game'
import Footer from './componets/Footer'
import {Routes, Route, redirect, Navigate} from 'react-router-dom';

const cardImages = [
  {src: '/cards/biscuit.png', matched: false},
  {src: '/cards/fly.png', matched: false},
  {src: '/cards/glitch.png', matched: false},
  {src: '/cards/ice.png', matched: false},
  {src: '/cards/kid.png', matched: false},
  {src: '/cards/hair.png', matched: false},
  {src: '/cards/roomba.png', matched: false},
  {src: '/cards/adobe.png', matched: false}
]

function App() {
  const [authorized, setAuthorized] = useState(false);

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);

  useEffect(() => {
    if (cardOne && cardTwo) {
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

        console.log('coinciden');
        
      } else {
        console.log('no coinciden');
      }

      setCardOne(null);
      setCardTwo(null);

      setTurns(turns + 1);
      
    }
  },[cardOne, cardTwo])

  const cardSelected = (card) => {
    cardOne ? setCardTwo(card) : setCardOne(card);
  }
  
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));
    setCards(shuffledCards);
    setTurns(0);
  }

  return <div>
    <Routes>
      <Route path='/' element={<Home setAuthorized={setAuthorized} shuffleCards={shuffleCards}/>}/>
      <Route path='/game' element={ authorized ? <Game turns={turns} cardSelected={cardSelected} shuffleCards={shuffleCards} cards={cards}/> : <Navigate to='/'/>}/>
    </Routes>
    <Footer/>

  </div>
}

export default App;
