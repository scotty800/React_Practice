import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Erreur réseau");
        return res.json();
      })
      .then((data: T) => setData(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
