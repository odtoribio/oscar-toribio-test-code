import {useState, useCallback} from 'react'

type State<T> = {
  data: T | null;
  loading: boolean;
  error: boolean;
};

const useFetch = <T>(url: string, options: RequestInit = {}) => {
  const [state, setState] = useState<State<T>>({
    data: null,
    loading: false,
    error: false
  });
  const request = useCallback(async () => {
    setState(prev => ({...prev, loading: true, error: false}));
    try {
      const response = await fetch(url, {...options});

      if(!response.ok) {
        throw new Error(`Request error. Code status: ${response.status}`);
      };

      const result:T = await response.json();
      setState({data: result, loading: false, error: false});

    } catch (error) {
      console.error({error})
      setState(prev => ({...prev, loading: false, error: true}));
    }
  }, [url])

  return {...state, request}
}

export default useFetch;
