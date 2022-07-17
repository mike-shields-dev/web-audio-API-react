import "./App.scss"

let audioContext = new (window.AudioContext || window.webkitAudioContext)()
let out = audioContext.destination
function App() {
  return (
    <div className='App'>
    </div>
  );
}

export default App;
