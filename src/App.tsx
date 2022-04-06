import './App.css';
import CountDownTimer from './components/CountDownTimer';

const daysHoursMinSecs = {days:14,hours:1,minutes: 1, seconds: 10};

window.localStorage.setItem("daysHoursMinSecs", JSON.stringify(daysHoursMinSecs));

let newObject = window.localStorage.getItem("daysHoursMinSecs") as string;
console.log(JSON.parse(newObject))

function App() {

  return (
    <div className="App">
     <CountDownTimer daysHoursMinSecs={JSON.parse(newObject)}/>
    </div>
  );
}

export default App;
