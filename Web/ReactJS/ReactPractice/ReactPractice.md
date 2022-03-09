#  React Practice
## async / await
ES7 비동기 처리

```
const getMovies = async() => {
        await fetch(
            `https://...`
            );
    };
```
- 함수 이름 앞에 `async` 키워드 붙이고
- 호출할 비동기 함수 앞에 `await` 키워드 사용
- 함수 앞에 `async`가 있어야만 `await` 적용  

`참고` https://www.youtube.com/watch?v=m0icCqHY39U  
`참고` https://velog.io/@bathingape/ES7-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC-Asyncawait

## e.preventDefault()
`<form>` 태그에서 submit할 때 새로고침되는 것을 막음

## map()
```
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
```
- 리액트에서는 map함수를 이용해서 리스트를 매핑할 때 **key** 속성을 넣어줘야 함  
- key값을 줌으로써 수정되지 않는 **기존의 값은 그대로** 두고 원하는 곳에 내용을 삽입하거나 삭제할 수 있음

`참고` https://react.vlpt.us/basic/11-render-array.html

## Setter함수 리스트 수정
```
const [todos, setTodos] = useState([]);
setTodos((current) => [todo, ...current]);
```
- [].push하는 기존의 자바스크립트의 리스트 수정 방식과 다름  
- 기존의 배열의 spread하고 추가된 항목까지 포함하여 새로운 리스트를 생성하고  
- setter함수를 통해 리스트를 갱신함  

## Routing
### App.js
```
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

```
- App.js 파일에는 주로 라우트 구현
- `<Router>` `<Route>`와 `<Link>`를 유기적으로 묶는 역할
- `<Route>`와 `<Link>` 컴포넌트는 DOM 트리 상에서 항상 `<Router>`를 공통 상위 컴포넌트로 가져야함
- `<Switch>` 한 번에 하나의 라우트만 연결
- `<Route path="/">` 특정 주소에 컴포넌트 연결
- `path="/movie/:id"`의 `/:id`는 파라미터가 들어가는 부분

`참고` https://velog.io/@goodenough/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9A%B0%ED%84%B0react-router  
`참고` https://velog.io/@bigbrothershin/React-Router

```
import { Link } from 'react-router-dom';
function Movie() {
    ...
    <Link to={`/movie/${id}`}>{title}</Link>
    ...
}
```
- `<Link>` 누르면 다른 주소로 이동