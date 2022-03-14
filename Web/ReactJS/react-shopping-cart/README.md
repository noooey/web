# TypeScript

## type
함수에 인자 넣어줄 때 타입 지정
```
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}
```
```
const getTotalItems = (item: CartItemType[]) => 
    item.reduce((ack: number, item) => ack + item.amount, 0);
```

## async/await
```
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();
```

## reduce()
```
const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item.id === id) {  // clicked item의 id가 인자의 id와 같다면
          if (item.amount === 1) return ack;  // item의 amount가 1이라면 ack 리턴
          return [...ack, {...item, amount: item.amount -1 }];  // item의 amount가 1이 아니라면 item의 amount를 -1하여 리턴
        } else {
          return [...ack, item];  // id가 틀리면 그대로 리턴
        }
      }, [] as CartItemType[])  // 리스트 초기값 as 타입 리스트
    );
  };
```