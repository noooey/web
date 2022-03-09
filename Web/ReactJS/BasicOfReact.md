# Basic of React
## THE BASIC OF REACT

### Hello.js
```
import React from 'react';   # 리액트 컴포넌트 만들 때, react 임포트

# Hello component
function Hello() {
    return <div>hello</div>
}

export default Hello;   # 컴포넌트 내보내기
```

### App.js
```
import React from 'react';
import Hello from './Hello';   # Hello 컴포넌트 임포트

# App component에서 Hello component 불러오기
function App() {
    <>
        <Hello />
    </>
}

export default App;   # 컴포넌트 내보내기
```

### Index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

# 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링
ReactDOM.render(<App />, document.getElementById('root'));

```

- 컴포넌트로 쪼개서 파일을 작성하기 때문에 컴포넌트 재사용 가능
- Index.html 파일 내부의 `<div id="root"></div>`를 통해 리액트 컴포넌트가 렌더링 될 때에는, 렌더링된 결과물이 위 div 내부에 렌더링되는 것임을 알 수 있음
- [JSX](https://ko.reactjs.org/docs/introducing-jsx.html) 사용

## useState
컴포넌트에서 바뀌는값 관리

```
import { useState } from 'react';   # useState 사용하기
```

```
const [number, setNumber] = useState(0);
```
- 배열의 첫 번째 요소는 상태
- 배열의 두 번째 요소는 값을 갱신해주는 Setter 함수
- useState의 파라미터는 상태의 초기값

```
# Setter함수를 이용한 숫자 키우는 함수 선언
const onIncrease = () => {
    setNumber(number + 1);
}
```
- setNumber함수의 파라미터로 상태 갱신

```
# 함수형 업데이트
const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
```
- 함수형 업데이트를 통해 새로운 상태 값을 파라미터로 넣어준 것이 아니라 상태를 업데이트

## Props
### useMemo
변화가 없는 컴포넌트에 대해서 불필요한 리렌더링이 일어나지 않도록 함
```
import { useMemo } from 'react';   # useMemo 사용하기
```
```
const count = useMemo(() => countActiveUsers(users), [users]);
```
- 두 번째 파라미터인 배열 안의 내용이 바뀔 경우 첫 번째 파라미터로 등록한 함수 호출
- 바뀌지 않을 경우 이전에 연산한 값 재사용

### Prop Types
속성의 타입을 지정해둠
```
import PropTypes from "prop-types";   # prop-types 사용하기
```
```
function Button({ text }) {
    return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
```
- 속성에 알맞지 않은 타입의 데이터가 들어와도 코드 상 오류가 없는 문제를 보완하기 위해서 속성 타입을 지정해둔다. 안 맞는 속성이 들어오면 warning

## useEffect
컴포넌트가 처음 생겨날 때(마운트), 사라졌을 때(언마운트), 업데이트될 때에 작업 처리
```
import { useEffect } from 'react';   # useEffect 사용하기
```
```
useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
```
- 컴포넌트가 마운트될 때 첫번째 파라미터의 함수 호출
- 두 번째 파라미터인 배열(`deps`)가 비어있을 경우에는 마운트될 때만 첫번째 파라미터의 함수 호출
- 배열(`deps`)에 특정 값이 존재하면 컴포넌트가 처음 마운트될 때 호출, 특정 값에 변화가 있을 때에도 호출, 언마운트 시에도 호출, 값이 바뀌기 직전에도 호출
- `useEffect` 안에서 사용하는 상태나 속성이 있으면 `deps`에 넣어줘야함
- 아예 `deps`를 생략하면 컴포넌트가 리렌더링 될 때마다 호출
- `useEffect`에서는 함수 반환 가능 -> `cleanup` 함수: `deps`가 비어있을 때는 언마운트 될 때 호출

`참고` https://react.vlpt.us/basic/03-first-component.html  
`참고` https://nomadcoders.co/react-for-beginners