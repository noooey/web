노트앱 아니고 투두메이트 따라해볼거임

2022-03-15

### App.tsx
```
    return (
        ...
        <Template>
        zzzzz!@#$%$!$#@
        </Template>
        ...
    )
```
Template 요소 안에 요소를 넣어주기 위해서 


### Template.tsx
```
type Props = {
    children: React.ReactNode;
};
```
```
export default function Template({ children }: Props) {
  return (
    <TemplateBlock>{children}</TemplateBlock>
  )
};
```
Template 속성 정의 시 파라미터로 children을 받아 넣어줌
타입스크립트니까 파라미터의 속성 지정해주고