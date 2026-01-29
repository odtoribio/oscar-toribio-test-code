import {useEffect} from 'react';
import { useParams } from "react-router-dom";
import useGetUsers from '../../hooks/network/useGetUsers';
import useGetPosts from '../../hooks/network/useGetPosts';
import PostItem from '../../components/post-item';

const PostsPage = () => {
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

  if(!foundUser || !posts.length) return <p>Post not found</p>

  return (
    <>
      <h2>{`${foundUser?.name}'s Posts List`}</h2>
      <PostItem posts={posts}/>
    </>
  )
}

export default PostsPage
