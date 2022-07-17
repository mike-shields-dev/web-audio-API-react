import { useState } from 'react'
import Osc1 from "./components/Osc1"
import "./App.scss"

let audioContext = new (window.AudioContext || window.webkitAudioContext)()
let out = audioContext.destination
let osc1 = audioContext.createOscillator()
let gain1 = audioContext.createGain()
osc1.connect(gain1)
gain1.connect(out)
gain1.gain.value = 0.01

function App() {
  const [osc1Freq, setOsc1Freq] = useState(osc1.frequency.value)

  function changeOsc1Freq(e) {
    const {value} = e.target
    osc1.frequency.value = value
    setOsc1Freq(value)
  }

  return (
    <div className='App'>
      <h1>sliders</h1>
      <button onClick={() => osc1.start()}>Start</button>
      <button onClick={() => osc1.stop()}>Stop</button>
      <Osc1 changeFreq={changeOsc1Freq} freq={osc1Freq} />
    </div>
  )
}

export default App
