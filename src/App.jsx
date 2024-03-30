import { useState } from 'react'
import './App.css'
import Home from './views/Home'
import Game from './views/Game'

const Cards = [
  {src: '../public/agave.svg'},
  {src: '../public/ajolote.svg'},
  {src: '../public/calavera.svg'},
  {src: '../public/calendar.svg'},
  {src: '../public/molcajete.svg'},
  {src: '../public/piñata.svg'},
  {src: '../public/salsa.svg'},
  {src: '../public/taco.svg'}
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...Cards, ...Cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));
    setCards(shuffledCards);
    setTurns(0);
  }  

  return <div>
      <Home shuffleCards={shuffleCards}/>
      {/* <Game/> */}

  </div>
}

export default App
