import { useState, useEffect } from 'react'
import useFetch from './useFetch';
import type { TPost } from './types';
const  API_URL = import.meta.env.VITE_API_URL;

const useGetPosts = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const { data: posts, loading, error, request } = useFetch<TPost[]>(`${API_URL}/posts?userId=${userId}`, { method: 'GET'});

  useEffect(() => {
    if(userId !== null){
      request()
    }

  }, [userId, request]);

  const getPost = (id: number) => {
    setUserId(id);
  }
  
  return {data: posts || [], loading, error, getPost}
}

export default useGetPosts;
