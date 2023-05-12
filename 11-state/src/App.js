import './App.css';
import RenderNumber from './components/RandomNumber';

function App() {
  return (
    <div className="App">
      <RenderNumber maxNumber={1000} />
    </div>
  );
}

export default App;
