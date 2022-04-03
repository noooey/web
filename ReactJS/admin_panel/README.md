# Admin Panel

2022-03-10
- topbar
- sidebar
- etc
- pages/home

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

*** 

2022-03-11
- pages/users


### [arrow function](https://stackoverflow.com/questions/52636910/eslint-error-unexpected-block-statement-surrounding-arrow-body-move-the-retur
)
```
  {
    renderCell: (params)=> {
      return (
        <div className='userListUser'></div>
      )
    }
  },
```

```
  {
    renderCell: (params)=> (
        <div className='userListUser'></div>
      )
  },

```
![image](https://user-images.githubusercontent.com/66217855/157784745-c83f050d-18f6-4f0b-9f83-4fe50687e459.png)  

eslint airbnb 기준
that enforces that arrow functions do not use braces if you just return one object.    
개체 하나만 반환하는 경우 화살표 함수에서는 중괄호를 사용하지 않음. (1번 X)  


### [useState]()
delete 버튼을 누르면 User 정보가 한 줄 씩 지워져야하는데
콘솔로그 찍어보면 지워지는거 같은데 화면에 반영이 안되는,,

handleDelete에는 문제가 없어 보이는데
```
const [data, setData] = useState(userRows);
const handleDelete = (id) => {
  setData(data.filter(item => item.id !== id));
}
...
  <DeleteOutline
    className="userListDelete"
    onClick={() => handleDelete(params.row.id)}
  />
```

는 return에서 실수가 있었다
```
  return (
    <div className='userList'>
        <DataGrid
        rows={data}
        ...
      />
    </div>
  )
}
```
return할 때 바뀌는 부분(rows)을 기존의 데이터인 `userRows`가 아니라 setter함수에 의해 변화한 데이터인 `data`로 넣어줘야 화면 상에도 반영이 되는거지 당연히...ㅎ..ㅠ

화면 상 반영에 문제가 있는 거 같으면 return을 꼭 확인해보쟈..
