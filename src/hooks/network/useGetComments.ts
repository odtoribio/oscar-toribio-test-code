import {useEffect, useState} from 'react'
import useFetch from './useFetch';
import type { TComment } from './types';

const  API_URL = import.meta.env.VITE_API_URL;

const useGetComments = () => {
  const [postId, setPostId] = useState<number | null>(null);

  const {
    data: posts,
    loading,
    error,
    request
  } = useFetch<TComment[]>(`${API_URL}/comments?postId=${postId}`, {
    method: 'GET'
  });

  useEffect(() => {
    if(postId !== null){
      request()
    }

  }, [postId, request]);

  const getComments = (id: number) => {
    setPostId(id);
  }
  
  return {data: posts || [], loading, error, getComments}
}

export default useGetComments;
