22-03-23
# React Redux

## 리덕스
상태 관리 라이브러리

- local state의 전달이 어려움  
- global state의 유지가 어려움
-> 하나의 store를 통해 모든 state를 저장할 수 있고 원하는 Component로 전달 가능

***
## 키워드
### 액션(action)
- 상태를 변화시키기 위해 발생
- 하나의 객체로 표현
- type 필드 필수
```
{
    type: "TOGGLE_VALUE"
    item
    data: {
        id: 0,
        text: 'run'
    }
}
```

### 액션 생성함수(action creator)
- 액션 만드는 함수
- 파라미터를 받아와서 액션 객체 형태로 만들어 줌
```
const decrease = (data) => ({
  type: "ADD_TODO",
  data

});
```

### 리듀서(reducer)
- 변화를 일으키는 함수
- 두 개의 파라미터를 받아옴 (state, action)
```
function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
}
```
- 현재의 상태(state)와 전달받은 액션(action)을 참고해 새로운 상태를 만들어 반환
- `default`에서는 기존 state 그대로 반환해야함


### 스토어(store)
- 리덕스는 한 애플리케이션 당 하나의 스토어를 만듦
- 안에는 현재의 앱 상태, 리듀서, 몇가지 내장 함수
```
const store = createStore(rootReducer);
```

### 디스패치(dispatch)
- 스토어의 내장함수 중 하나
- 액션 발생
```
store.dispatch(decrease());
```

### 구독(subscribe)
- 스토어의 내장함수 중 하나
- subscribe 함수에 특정 함수를 전달해주면 액션이 디스패치 되었을 때마다 전달해준 함수 호출

***
## 리덕스의 3가지 규칙
1. 하나의 애플리케이션 안에는 하나의 스토어
2. 상태는 읽기전용(불변성 유지)
3. 리듀서는 순수한 함수여야함
않
***
## useSelector 최적화
상태 변화가 없을 경우 불필요한 리렌더링을 막기 위해 useSelector 사용

```
const todos = useSelector(state => state.todos);
```
todos의 상태변화 X -> 리렌더링X

```
const { number, diff } = useSelector(state => ({
  number: state.counter.number,
  diff: state.counter.diff
}));
```
그런데 매번 새로운 객체를 만드는 컴포넌트라면 useSelector을 사용해도 매번 리렌더링이 됨
1. number와 diff에 대해 각각 useSelector 적용
  ```
  const number = useSelector(state => state.counter.number);
  const diff = useSelector(state => state.counter.diff);
  ```
2. react-redux의 shallowEqual 함수를 useSelector의 두번째 인자로 전달
  ```
  const { number, diff } = useSelector(
    state => ({
      number: state.counter.number,
      diff: state.counter.diff
    }),
    shallowEqual
  );
  ```

`참고` https://react.vlpt.us/redux/
`참고` https://medium.com/@jsh901220/react%EC%97%90-redux-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-a8e6efd745c9
