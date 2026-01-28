import {useState} from 'react'
import type { TPost } from '../../../hooks/network/types'
import useGetComments from '../../../hooks/network/useGetComments'
import CommentItem from '../../comment-item'
import './Item.css';

type Props = {
  post: TPost
}

const Item = ({post}: Props) => {
  const [showComments, setShowComments] = useState(false);
  const { data: comments, loading: loadingComments, getComments } = useGetComments();

  const handleClickShowComments = () => {
    setShowComments(prev => !prev);
    getComments(post.id)
  }

  return (
    <div className='item' key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button className="show-button" onClick={handleClickShowComments}>{showComments ? 'Hide' : 'Show'} comments</button>
      {loadingComments && <p>Loading comments...</p>}
      {comments && comments.length && showComments ? <CommentItem comments={comments} /> : null}
      {showComments && comments?.length === 0 && <p>No comments</p>}
    </div>
  )
}

export default Item
