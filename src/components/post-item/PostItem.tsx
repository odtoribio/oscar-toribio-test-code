import type { TPost } from '../../hooks/network/types';
import './PostItem.css';
import Item from './partial/Item';

type Props = {
  posts: TPost[]
}

const PostItem = ({posts}: Props) => {
  return (
    <div className='post-container'>
      {
        posts.map(post => {
          return <Item post={post}/>
        })
      }
    </div>
  )
}

export default PostItem
