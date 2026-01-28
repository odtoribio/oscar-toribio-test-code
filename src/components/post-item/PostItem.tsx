import type { TPost } from '../../hooks/network/types';
import './PostItem.css';

type Props = {
  posts: TPost[]
}

const PostItem = ({posts}: Props) => {
  return (
    <div className='post-container'>
      {
        posts.map(post => {
          return (
            <div className='item' key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostItem
