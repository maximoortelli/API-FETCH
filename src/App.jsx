//No hace falta useState ni useEffect
import "./App.css";
//Importamos el customHook que acabamos de crear useFetch.js.
import { useFetch } from "./useFetch";


function App() {
  const { data, loading, error, handleCancelRequest } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="App">
      <h1>More clean Fetch Like a Super PRO</h1>
      <button onClick={handleCancelRequest}>Cancel Request</button>
      <div className="card">
        <ul>
        {/*De esta forma si loading es true cargara Loading */}
          {error && <li>Error...</li>}
          {/*De esta forma si loading es true cargara Loading */}
          {loading && <li>Loading...</li>}
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
