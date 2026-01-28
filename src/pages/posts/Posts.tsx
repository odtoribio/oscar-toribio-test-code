import {useEffect} from 'react';
import { useParams } from "react-router-dom";
import useGetUsers from '../../hooks/network/useGetUsers';
import useGetPosts from '../../hooks/network/useGetPosts';

const Posts = () => {
  const { id: userId } = useParams();

  const { data: users, loading: loadingUsers, error: userError, getUsers } = useGetUsers();
    const { data: posts, loading: loadingPosts,error: postError, getPost } = useGetPosts();


  useEffect(() => {
    const makeRequest = async () => {
      if(userId && !isNaN(Number(userId))){
        await getUsers();
        await getPost(Number(userId))
      }
    }

    makeRequest();
  }, []);

  if(loadingPosts || loadingUsers) return <p>Loading...</p>
  if(userError || postError) return <p>error...</p>

  const foundUser = users?.find(user => user.id === Number(userId));
  const postsMapped = posts.map(post => <p>{post.title}</p>);

  if(!foundUser || !postsMapped) return <p>Post not found</p>

  return (
    <>
      <h2>Posts from {foundUser?.username}</h2>
      <div>{postsMapped}</div>
    </>
  )
}

export default Posts
