import {useState} from 'react'
import './index.css'

function CoinToss() {
  const [tossResult, setTossResult] = useState('heads') // Initial image set to heads
  const [total, setTotal] = useState(0)
  const [headsCount, setHeadsCount] = useState(0)
  const [tailsCount, setTailsCount] = useState(0)

  const coinchange = () => {
    const toss = Math.floor(Math.random() * 2) // 0 or 1

    if (toss === 0) {
      setTossResult('heads')
      setHeadsCount(headsCount + 1)
    } else {
      setTossResult('tails')
      setTailsCount(tailsCount + 1)
    }

    setTotal(total + 1)
  }

  return (
    <div className="bg-container">
      <div className="container">
        <h1 className="heading">Coin Toss Game</h1>
        <p>Heads (or) Tails</p>
        <img
          src={
            tossResult === 'heads'
              ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
          }
          alt="toss result"
        />
        <button onClick={coinchange} className="button">
          Toss Coin
        </button>
        <div className="new-container">
          <p>Total: {total}</p>
          <p>Heads: {headsCount}</p>
          <p>Tails: {tailsCount}</p>
        </div>
      </div>
    </div>
  )
}

export default CoinToss
