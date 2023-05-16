import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside Wrapper</h2>
      </Wrapper>
      <Wrapper color="green">
        <h2>Another text</h2>
      </Wrapper>
    </div>
  )
}

export default App
