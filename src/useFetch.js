/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
//Siempre importamos useState y useEffect

export function useFetch(url) {
  //tambien llamamos siempre a data y a setData
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // Esto nos indica si esta cargando, siempre poner "useState(true); para indicarnos que si carga esta funcionando"
  const [error, setError] = useState(null);
  //Si hay algun error saldra esto
  const [controller, setController] = useState(null);

  useEffect(() => {
    /* Si un usuario cierra la pestaña o cancela el fetcheo, o
    estas viendo una pelicula o un capitulo de una serie 
    y clickas para verlo pero antes de que se cargue
    te vas a otro y queres abortar la peticion utilizas AbortController(); */
    const abortController = new AbortController();
    setController(abortController);
    setLoading(true);
    /*Pasamos el parametro "url" en vez del "link" */
    fetch(url, { signal: abortController.signal }) //{ signal: abortController.signal } permite ponerle como un rastreador y ubicarlo
      .then((response) =>
        response.json()
      ) /* Cuando la solicitud se completa, obtiene la respuesta y la convierte a JSON*/
      .then((data) =>
        setData(data)
      ) /*Cuando la conversión a JSON se completa, asigna los datos resultantes a una función llamada setData*/
      //.then((data) => setError("Ocurrio un error")) Esto seria un Error forzado, nos daria error.
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Request Cancelled");
        } else {
          setError(error);
        }
      }) // esto nos catchea el error si llegase a existir uno.
      .finally(() => setLoading(false)); //Este metodo se va a ejecutar cuando se cumplan todas las promesas.

    return () => abortController.abort();
    /*Esta funcion se va a ejecutar cuando el componente 
    sea desmontado o si se destruye el component no haga nada mas.*/
  }, []);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Request cancelled");
    }
  };

  /*ponemos "return {data};" con llaves por que 
  es mas facil desestructurar un objeto que un array*/
  return { data, loading, error };
}
