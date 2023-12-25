// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentsData, onDeleteComment, onLikeClick} = props
  const {id, userName, comment, time, isLike} = commentsData

  const firstLetter = userName.slice(0, 1)

  const onClickDltBtn = () => {
    onDeleteComment(id)
  }

  const onClickLike = () => {
    onLikeClick(id)
  }

  const image = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const classLike = isLike ? 'class-btn' : 'normal'
  return (
    <li className="lis-item-container">
      <div className="first-container">
        <div className="name-letter-container">
          <p className="first-letter">{firstLetter}</p>
        </div>
        <p className="username">{userName}</p>
        <p className="time">{time}</p>
      </div>
      <div className="comment-container">
        <p className="comment-show">{comment}</p>
      </div>
      <div className="bottom-container">
        <button type="button" className="like-btn" onClick={onClickLike}>
          <img src={image} alt="like" />
          <p className={classLike}>Like</p>
        </button>
        <button
          type="button"
          className="dlt-btn"
          onClick={onClickDltBtn}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="button-dlt"
          />
        </button>
      </div>
      <hr className="hr-line-li" />
    </li>
  )
}
export default CommentItem
