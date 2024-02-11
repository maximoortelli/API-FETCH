import { useState, useEffect } from "react";
import "./App.css";

function Fetch() {
  const [data, setData] = useState(null);

  /*Esta bueno pero NO es una manera muy limpia de llamar a una API CON FETCH*/
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <div className="card">
        <ul>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Fetch;
