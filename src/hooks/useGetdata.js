import {useState, useEffect} from 'react';

function useGetdata(url) {
  const [syncData, setSyncData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [isSuccessful, setSuccess] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => setError(err));
      setSyncData(data);
      setIsPending(false);
    };
    fetchCountry();
  }, [url]);
  return {
    syncData,
    isPending,
    error,
  };
}

export default useGetdata;
