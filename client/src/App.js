import './App.css';
import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';

function App() {

  const [listOfDirectors, setlistOfDirectors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getDirectors").then((response) => {
      setlistOfDirectors(response.data);
    }
    )
  }, []);

  return (
    <div className="App">
      <div className="directorsDisplay">
        {listOfDirectors.map((director, id) => {
          return (
            <div>
              <h2>Name: {director.name}</h2>
              <h2>Age: {director.age}</h2>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
