import './App.css';
import CountDownTimer from './components/CountDownTimer';

function App() {

  const daysHoursMinSecs = {days:2,hours:0,minutes: 0, seconds: 10}

  return (
    <div className="App">
     <CountDownTimer daysHoursMinSecs={daysHoursMinSecs}/>
    </div>
  );
}

export default App;
