import './App.css';
import CountDownTimer from './components/CountDownTimer';

function App() {

  const daysHoursMinSecs = {days:14,hours:1,minutes: 1, seconds: 10}

  return (
    <div className="App">
     <CountDownTimer daysHoursMinSecs={daysHoursMinSecs}/>
    </div>
  );
}

export default App;
