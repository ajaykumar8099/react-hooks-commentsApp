import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const Comments = () => {
  const [userName, setUserName] = useState('')
  const [comment, setComment] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onChangeName = event => {
    setUserName(event.target.value)
  }

  const onChangeComment = event => {
    setComment(event.target.value)
  }

  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      userName,
      comment,
      time: formatDistanceToNow(new Date()),
      isLike: false,
    }
    setCommentsList(prev => [...prev, newComment])
    setUserName('')
    setComment('')
  }

  const onDeleteComment = id => {
    const filterList = commentsList.filter(each => each.id !== id)
    setCommentsList(filterList)
  }

  const onLikeClick = id => {
    setCommentsList(prevList =>
      prevList.map(each =>
        each.id === id ? {...each, isLike: !each.isLike} : each,
      ),
    )
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="head">Comments</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
          className="image"
        />
        <p className="say-some-para">Say something about 4.0 Technologies</p>
        <form onSubmit={onAddComment}>
          <input
            type="text"
            className="input-name"
            placeholder="Your Name"
            onChange={onChangeName}
            value={userName}
          />
          <br />
          <textarea
            rows="7"
            cols="55"
            className="textarea-comment"
            onChange={onChangeComment}
            value={comment}
            placeholder="Your Comment"
          />
          <br />
          <button type="submit" className="submit-button">
            Add Comment
          </button>
        </form>
        <hr className="hr-line" />
        <div className="count-comment-container">
          <div className="comment-count-box">
            <p className="comment-count">{commentsList.length}</p>
          </div>
          <p className="comments-count">Comments</p>
        </div>
        <ul className="ul-li-items">
          {commentsList.map(each => (
            <CommentItem
              key={each}
              commentsData={each}
              onDeleteComment={onDeleteComment}
              onLikeClick={onLikeClick}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Comments
