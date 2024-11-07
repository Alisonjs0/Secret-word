import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>Game Over</h1>
        <h2>Sua pontuacao foi de: <span>{score}</span> pontos</h2>
        <button onClick={retry}>Tente Novamente</button>
    </div>
  )
}

export default GameOver