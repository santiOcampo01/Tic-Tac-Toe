import '../styles/FirstScreenStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function FirstScreenComponent() {

  fetch('https://emoji-api.com/emojis?access_key=08369c1949dee5b1e884aa570ba395a0f0488bc1')
  .then(response => response.json())
  .then(data => console.log(data));


  //Player vs Player
  const [buttonPlayers, setButtonPlayers] = useState(true)
  const [buttonP1, setButtonP1] = useState(false)
  const [buttonP2, setButtonP2] = useState(false)
  const [iconP1, setIconP3] = useState(false)
  const [iconP2, setIconP4] = useState(false)
  const [ShowPlayers, setShowPlayers] = useState(false)
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const icons = ['X', 'O', ]

  //Player vs pc

  const [buttonPc, setButtonPc] = useState(true)
  const [buttonCompuer1, setButtonComputer1] = useState(false)
  const [showPCompuer, setShowComputer] = useState(false)
  const [showIconPc, setShowIconPc] = useState(false)
  const [showPcFinal, setShowPcFinal] = useState(false)
  const [playerPc, setPlayerPc] = useState('')
  // const [pcIcon, setPcIcon] = useState('')

  //I want to get the value of the input with the id Player1
  const PvP = document.getElementsByClassName('buttonContainer')


// Código de ejemplo

  function handleClickPlayers() {
    setButtonP1(!buttonP1)
    setButtonPlayers(!buttonPlayers)
    setButtonPc(!buttonPc)

    PvP[0].style.justifyContent = 'center'
  }

  function handleClickP1() {
    setIconP3(!iconP1)
    console.log(player1)
  }

  function handleClickP2() {
    setIconP3(!iconP1)
    setButtonP2(!buttonP2)
    setButtonP1(!buttonP1)
  }

  function handleClickP3() {
    setIconP4(!iconP2)
  }

  function handleClickP4() {
    setIconP4(!iconP2)
    setButtonP2(!buttonP2)
    setShowPlayers(!ShowPlayers)
  }

  function handleClickPc() {
    setButtonPc(!buttonPc)
    setButtonPlayers(!buttonPlayers)
    setButtonComputer1(!buttonCompuer1)
    PvP[0].style.justifyContent = 'center'
  }

  function handleClickComputer1() {
    setShowComputer(!showPCompuer)
  }

  function handleClickIconPC() {
    setButtonComputer1(!buttonCompuer1)
    setShowComputer(!showPCompuer)
    setShowIconPc(!showIconPc)
  }

  function handleClickPCFinal() {
        setShowIconPc(!showIconPc)
    setShowPcFinal(!showPcFinal)
  }

  return (
    <div className="FirstScreenComponent">
      <div className="title">
        <h1>
          Bienvenido a <br></br>Tres en linea
        </h1>
      </div>

      <div className="SelecctorContainer">
        <div className="subtitle">
          <h2>Selecciona tu oponente </h2>
        </div>
        <div className="buttonContainer">
          <div className="Players">
            {buttonPlayers && (
              <button className="buttonJugador" onClick={handleClickPlayers}>
                Jugador vs Jugador
              </button>
            )}
            {buttonP1 && (
              <div className="changeName">
                <input type="text" placeholder="Jugador 1" id="Player1" onChange={e => setPlayer1(e.target.value)} />
                <button onClick={handleClickP1} className="submit">
                  Ok
                </button>
              </div>
            )}
            {iconP1 && (
              <div>
                <button className="iconos" onClick={handleClickP2}>
                  seleccionar icono
                </button>
              </div>
            )}
            {buttonP2 && (
              <div className="changeName">
                <input type="text" placeholder="Jugador 2" id="Player2" onChange={e => setPlayer2(e.target.value)} />
                <button onClick={handleClickP3} className="submit">
                  Ok
                </button>
              </div>
            )}
            {iconP2 && (
              <div>
                <button className="iconos" onClick={handleClickP4}>
                  seleccionar icono
                </button>
              </div>
            )}
            {ShowPlayers && (
              <div>
                <h3>Jugador1:</h3>
                <p>{player1}</p>
                <h3>Jugador2:</h3>
                <p>{player2}</p>
              </div>
            )}
          </div>

          <div className="changeNamePJ1">
            {/* <input type="text" placeholder="Jugador 1" /> */}
            {buttonPc && (
              <button className="buttonJugador" onClick={handleClickPc}>
                Jugador vs Computador
              </button>
            )}

            {buttonCompuer1 && (
              <div className="changeName">
                <input type="text" placeholder="Player" id="PlayerPc" onChange={e => setPlayerPc(e.target.value)} />
                <button onClick={handleClickComputer1} className="submit">
                  Ok
                </button>
              </div>
            )}

            {showPCompuer && (
              <div>
                <button className="iconos" onClick={handleClickIconPC}>
                  seleccionar icono
                </button>
              </div>
            )}

            {showIconPc && (
              <div>
                <button className="iconos" onClick={handleClickPCFinal}>
                  seleccionar icono
                </button>
              </div>
            )}

            {showPcFinal && (
              <div>
                <h3>Jugador:</h3>
                <p>{playerPc}</p>
                {/* <h3>Jugador2:</h3>
                <p>{player2}</p> */}
                
              </div>
            )}
          </div>
        </div>

        <div className="playContainer">
          <Link to="/game">Jugar</Link>
        </div>
      </div>
    </div>
  )
}
