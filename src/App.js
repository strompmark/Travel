import logo from './logo.svg';
import './App.css';
import TravelCard from './components/TravelCard';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <TravelCard/>
        <TravelCard/>
        <TravelCard/>
        <TravelCard/>
        <TravelCard/>
      </div>
    </div>
  );
}

export default App;
