// 리듀서를 합쳐서 루트리듀서를 만드는 작업
import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;