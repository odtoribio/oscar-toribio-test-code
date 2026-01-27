import {useState} from 'react'
import type { TUser } from './types';

const  API_URL = 'https://jsonplaceholder.typicode.com'

const useGetUsers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (): Promise<TUser[] | undefined> => {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/users`, {
        method: 'GET'
      });

      if(!response.ok) {
        throw new Error(`Request error. Code status: ${response.status}`);
      };


      const result = await response.json();
      console.log({result})

      return result;

    } catch (error) {
      console.error({error})
      setError(true);
    } finally {
      setLoading(false)
    }
  }

  return {loading, error, request}
}

export default useGetUsers;