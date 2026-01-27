import {useState} from 'react'
import type { TUser } from './types';

const  API_URL = 'https://jsonplaceholder.typicode.com'

const useGetPosts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (id: number): Promise<TUser[] | undefined> => {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/posts?userId=${id}`, {
        method: 'GET'
      });

      if(!response.ok) {
        throw new Error(`Request error. Code status: ${response.status}`);
      };


      const result = await response.json();
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

export default useGetPosts;