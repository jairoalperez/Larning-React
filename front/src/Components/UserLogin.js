import React from 'react'

function UserLogin(user) {
  return (
    <div>{user.userEmail===""?'Login':<span>Welcome {user.userName}</span>}</div>
  )
}

export default UserLogin