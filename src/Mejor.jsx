import "./App.css";
import { fetchData } from "./fetchData";
import { Suspense } from "react";

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

function Mejor() {
  const data = apiData.read();
  return (
    <div className="App">
      <h1>Fetch like a Master PRO</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((user) => {
            return <li key={user.id}>{user.name}</li>; // Asegúrate de devolver el elemento <li>
          })}
        </ul>
      </Suspense>
    </div>
  );
}

export default Mejor;
