import React from 'react'
import { FriendListBlock, Friends } from './FriendList.styles'
import { NavigateNext } from '@material-ui/icons';

export default function FriendList() {
  const friends = [1, 2, 3, 4, 5, 6, 7, 8];


  return (
    <FriendListBlock>
      <div className="friend">규</div>
      <Friends>
        {friends.map((friend, index) => <div className="friend">{friend}</div>)}
      </Friends>
      <div className="friend" onClick={() => null}>
        <NavigateNext />
      </div>
    </FriendListBlock>
  )
}
