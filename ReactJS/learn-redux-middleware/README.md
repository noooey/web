2022-03-24
# 오늘의 에러..

### 1. 라우터 연결에서 에러
```
function App() {
  return (
    <Routes>
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </Routes>
  );
}
```
에러발생!
> react_devtools_backend.js:3973 Matched leaf route at location "/3" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page. 

```
function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} exact={true} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
}
```
버전 문젠 듯
- component -> element로 바꿔주고
- 중괄호 안에를 컴포넌트 형태로 바꿔줌

`참고` https://velog.io/@dadak/This-means-it-will-render-an-Outlet-with-a-null-value-by-default-resulting-in-an-empty-page.%EC%97%90%EB%9F%AC%EC%9E%A1%EA%B8%B0

***
### 2. params 가져오는데서 에러

파라미터의 params 속성을 가져오려는데
```
function PostPage({ match }) {
  const { id } = match.params;

  return (<PostContainer postId={parseInt(id, 10)} />);
}
```
params가 없대서...
> PostPage.js:5 Uncaught TypeError: Cannot read properties of undefined (reading 'params')

```
function PostPage({ match }) {
  const { id } = useParams();

  return (<PostContainer postId={parseInt(id, 10)} />);
}
```
또 버전 문젠거같은데
- match.params -> useParams()로 바꿔줌
- 당근 위에서 useParams 임포트 해줘야함!

`참고` https://velog.io/@kcdoggo/Cannot-read-property-params-of-undefined-%EC%97%90%EB%9F%AC