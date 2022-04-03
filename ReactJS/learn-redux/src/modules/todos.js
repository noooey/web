/* 액션 타입 */
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

/* 액션 생성함수 */
let nextId = 1; // todo 데이터에서 사용 할 고유 id
export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줌
    text
  }
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

/* 초기 상태 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없음
// 배열, 숫자, 문자열, 불리언 다 ㄱㅊ
const initialState = [
  /* 다음과 같이 구성된 객체를 이 배열 안에 넣을 예정
  {
    id: 1,
    text: '예시',
    done: false
  }
  */
];

/* 리듀서 */
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id // id가 일치하면
            ? { ...todo, done: !todo.done } // done값 반전
            : todo // 아니라면 그대로 둠
      );
    default:
      return state;
  }
}