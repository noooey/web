const myLogger = store => next => action => {
    console.log(action);  // 액션 출력
    const result = next(action);  // 다음 미들웨어 (또는 리듀서)에 액션 전달

    // 업데이트 이후 상태 조회
    console.log('\t', store.getState());

    return result;  // 반환값 = dispatch(action)의 결과물. 기본: undefined
};

export default myLogger;