import { useState, useEffect } from "react";

export const useFetch = (url) => {
  // Datos de la peticion
  const [data, setData] = useState(null);
  // Estado de la peticion
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async (url) => {
      try {
        let res = await fetch(url);
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: res.statusText ? res.statusText : "Ocurrio un error",
          };
        }

        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    })(url);
  }, [url]);

  return { data, isPending, error };
};
