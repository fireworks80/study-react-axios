import { useState, useEffect } from 'react';

export default function usePrimise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const[ resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        console.log(resolved);
        setResolved(resolved);
      } catch(e) {
        setError(e);
      }
      setLoading(false);
    }

    process();
  }, deps);

  return [loading, resolved, error];
};