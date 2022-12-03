import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
            <div key={id}>
              <h2>Name: {director.name}</h2>
              <h2>Age: {director.age}</h2>
              <img src="data:image/<%=image.img.contentType%>;base64,
                     <%=image.img.data.toString('base64')%>" alt="hamada"></img>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
