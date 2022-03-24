// n 밀리세컨드 동안 기다리는 프로미스를 만들어주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 가짜 포스트 목록 데이터
const posts = [
  {
    id: 1,
    title: '1111',
    body: '1.1.1.1.',
  },
  {
    id: 2,
    title: '2222',
    body: '2.2.2.2',
  },
  {
    id: 3,
    title: '3333',
    body: '3.3.3.3',
  }
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  await sleep(500); // 0.5초 쉬고
  return posts; // posts 배열
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
  await sleep(500);
  return posts.find(post => post.id === id); // id로 찾아서 반환
}