import React from 'react'
import { ProfileBlock,  ProfileIntro } from './Profile.styles';

export default function Profile() {
  return (
    <ProfileBlock>
      <img
        src="https://pbs.twimg.com/profile_images/1276485817335083008/6qVUbWvL_400x400.jpg"
        alt="img"
        className="ProfileImg"
      />
      <ProfileIntro>
        <h3 className="ProfileName">이름</h3>
        <p className="ProfileIntro">프로필에 자기소개를 입력해보세요</p>
      </ProfileIntro>
    </ProfileBlock>
  )
};
