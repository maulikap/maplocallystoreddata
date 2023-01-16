import logo from './logo.svg';
import './App.css';

var abc = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];

// var abc = ["Reactjs","JavaScript","Expressjs"]

function App() {
return (
  <div>
    {
      abc.map((value)=><li key={value.name}>{value.name} : {value.student}</li>        
      )
    }
  </div>
);
}

export default App;
