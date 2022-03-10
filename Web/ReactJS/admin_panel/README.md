# Admin Panel

2022-03-10
### [PropTypes](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)  

리액트에서 함수 인자를 받을 때 PropType을 지정해주면 타입검사를 할 수 있음
```
function Button({ type }) {
    return <button className={`widgetLgButton ${type}`} type="button">{type}</button>;
  }
```

PropTypes 지정
```
Button.propTypes = {
    type: PropTypes.string.isRequired
  };
```

eslint airbnb를 적용 중인데 여기에는 forbidden인 타입들이 몇가지 있음
(array, object 등...)
```
TodoList.propTypes = { 
    todoList: PropTypes.array.isRequired
    };
```
이런 경우 object 내부의, array 내부의 요소들의 타입까지 구체적으로 설정해주어야한다.
```
TodoList.propTypes = { todoList: PropTypes.arrayOf(PropTypes.object).isRequired, };
```

`참고` https://zereight.tistory.com/787

### [eslint 적용하기](https://react.vlpt.us/basic/27-useful-tools.html) 
eslint airbnb를 적용했는데 겁나 까다롭다..
### [google font](https://fonts.google.com/)    
### [css generator](https://html-css-js.com/css/generator/border-outline/)   
### [simple line chart](https://recharts.org/en-US/examples/SimpleLineChart)  
### [material icons](https://v4.mui.com/components/material-icons/)  