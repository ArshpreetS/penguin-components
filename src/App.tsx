import './App.css';
import { FlightCard } from './components/flight-card';

function App() {


  return (
    <div className="main">
      <FlightCard airportCode='JFK' destination='New York' flightType='Economy' price={180}></FlightCard>
    </div>
  )
}

export default App
