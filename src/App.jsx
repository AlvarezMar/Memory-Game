import { useState } from 'react'
import './App.css'
import Home from './views/Home'
import Game from './views/Game'

const cardImages = [
  {
    src: '../public/biscuit.png',
    name: 'El Agave'
  },
  {
    src: '../public/fly.png',
    name: 'El Ajolote'
  },
  {
    src: '../public/glitch.png',
    name: 'La Calavera'
  },
  {
    src: '../public/ice.png',
    name: 'El Calendario'
  },
  {
    src: '../public/kid.png',
    name: 'El Molcajete'
  },
  {
    src: '../public/hair.png',
    name: 'La Piñata'
  },
  {
    src: '../public/roomba.png',
    name: 'La Salsa'
  },
  {
    src: '../public/adobe.png',
    name: 'El Taco'
  }
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [playing, setPlaying] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}));
    setCards(shuffledCards);
    setTurns(0);
    setPlaying(true);
  }
  
  const backToHome = () => {
    setPlaying(false);
  }

  return <div>
    {playing ? <Game backToHome={backToHome} cards={cards}/>
    : <Home shuffleCards={shuffleCards}/>}

  </div>
}

export default App
