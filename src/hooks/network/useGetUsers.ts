import useFetch from './useFetch';
import type { TUser } from './types';

const  API_URL = import.meta.env.VITE_API_URL;

const useGetUsers = () => {
  const { data: users, loading, error, request: getUsers } = useFetch<TUser[]>(`${API_URL}/users`, { method: 'GET'});
  const data = users || [];
  return {data, loading, error, getUsers}
}

export default useGetUsers;
