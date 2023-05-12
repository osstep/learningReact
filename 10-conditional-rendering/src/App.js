import './App.css';
import PetInfo from './PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="10" hasPet={true}></PetInfo>
      <PetInfo animal="dog" age="7" hasPet={false}></PetInfo>
    </div>
  );
}

export default App;
