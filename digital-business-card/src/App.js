import './App.css';
import data from "./assets/data.json"
import Card from "./components/Card/Card"

function App() {
  return (
    <>
      {
        data.map(person => <Card key={person.fullName} {...person}/>)
      }
    </>
  );
}

export default App;
