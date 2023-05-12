import './App.css';
import MyComponent from './components/MyComponents';
import OtherComponent from './components/OtherComponent';

function App() {
  return (
    <div className="App">
      <MyComponent></MyComponent>
      <OtherComponent></OtherComponent>
      <MyComponent></MyComponent>
      <OtherComponent></OtherComponent>
    </div>
  );
}

export default App;
