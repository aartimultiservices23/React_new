import { useEffect } from 'react';

export function useAutoPing() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      // TODO: call backend to log event
      console.log('Ping: screenshot event (placeholder)');
     // fetch('http://localhost:8080/api/screenshot', { method: 'POST' });
    }, 20_000); 

    return () => clearInterval(intervalId);
  }, []);
}
