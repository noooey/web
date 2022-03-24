import React, { useEffect } from 'react'

const KaKaoButton = () => {
  useEffect(() => {
    createButton()
  }, [])

  const createButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Link.createDefaultButton({
        container: '#kakao-share-btn',
        objectType: 'feed',
        content: {
          title: '제목~',
          description: '내용내용내용',
          imageUrl: 'https://postfiles.pstatic.net/MjAyMTAzMDJfMSAg/MDAxNjE0NjgwMjUxOTk4.yWIdD4xNjA6M1v7nhn8gXEm4AAFwyK7VcESLiX6eBoYg.J1GGIHRIfhDIIfYe9aPrTo28-hg1UF1Pfl0WE-eU2Uwg.PNG.djmidi0123/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2021-03-02_%EC%98%A4%ED%9B%84_7.17.27.png?type=w773',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          sharedCount: 122,
        },
        buttons:  [
          {
            title: '나도 테스트 해보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ]
      })
    }
  }

  return (
    <button id='kakao-share-btn'>
      공유~~
    </button>
  )
};

export default KaKaoButton;