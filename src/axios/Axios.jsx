//npm install axios
import { useEffect } from "react";
import "./Axios.css";
import axios from "axios";
import { useState } from "react";

const Axios = () => {
  const [list, setList] = useState([]);

  const GetList = () => {
    axios
      //para este caso utilizamos la API de Rick y Morty.
      .get("https://rickandmortyapi.com/api/character")
      .then((value) => setList(value.data.results));
  };

  useEffect(() => {
    GetList();
  });

  return (
    <div className="list-container">
      <h1>FETCH WITH AXIOS LIKE A HYPER PRO </h1>
      <ul className="ul-list">
        {/*Aca va list y lo iteras con map()*/}
        {list.map((item) => {
          return <li key={item.id} className="li-list">{item.name}</li>;
        })}
        {list.map((item) => {
          return <img width="80px" key={item.id} src={item.image}/>;
        })}
      </ul>
    </div>
  );
};

export default Axios;
