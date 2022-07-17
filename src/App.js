import "./App.scss"

let audioContext = new (window.AudioContext || window.webkitAudioContext)()
let out = audioContext.destination
let osc1 = audioContext.createOscillator()
let gain1 = audioContext.createGain()
osc1.connect(gain1)
gain1.connect(out)
gain1.gain.value = 0.01
function App() {
  return (
    <div className='App'>
      <button onClick={() => osc1.start()}>Start</button>
      <button onClick={() => osc1.stop()}>Stop</button>
    </div>
  );
}

export default App;
