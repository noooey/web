# 카카오톡 공유하기 테스트

2022-03-24

# 자바스크립트를 이용해서 특정 URL로 이동시키기
`window.location.href`를 이용
ex)

`참고` https://www.codingfactory.net/10691


# 리액트 앱에서 .env를 이용해 환경변수 설정하기
API KEY값 받아서 머 좀 하는데 얘때매 인증오류 자꾸 나서...

1. 루트 파일에 `.env` 파일 추가
2. `REACT_APP_...`형태로 변수명 생성
  ex) `REACT_APP_KAKAO_KEY='123'` 등호 사이에 띄어쓰기도 하지마세용
3. `process.env.REACT_APP_KAKAO_KEY` 이런 형태로 불러와줌

`참고` https://m.blog.naver.com/legend25/222033372402

자고로 리액트에는 dotenv 내장되어있대용

`참고` https://db2dev.tistory.com/entry/React-Webpack%EC%9C%BC%EB%A1%9C-%EA%B5%AC%EC%B6%95%ED%95%9C-React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98env-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0