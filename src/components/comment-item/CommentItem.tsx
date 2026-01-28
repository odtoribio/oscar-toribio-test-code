import type { TComment } from '../../hooks/network/types'
import './CommentItem.css';

type Props = {
  comments: TComment[];
}

const CommentItem = ({comments}: Props) => {
  return (
    <div className='comment-item-container'>
      {
        comments.map(comment => {
          return (
            <div key={comment.id}>
              <p>email: {comment.email}</p>
              <p>Comment: {comment.body}</p>
              <hr/>
            </div>
          )
        })
      }
    </div>
  )
}

export default CommentItem
