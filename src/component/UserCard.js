import React from 'react'

const UserCard = (props) => {
  return (
    <div>name: {props.user.login}</div>
  )
}

export default UserCard;