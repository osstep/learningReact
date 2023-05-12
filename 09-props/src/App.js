import './App.css';
import PetInfo from './PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="10"></PetInfo>
      <PetInfo animal="dog" age="7"></PetInfo>
    </div>
  );
}

export default App;
