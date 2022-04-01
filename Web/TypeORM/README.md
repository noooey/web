2022-04-01

# ProgreSQL
## 시작하기 (Ubuntu)
- progeSQL을 설치하면 기본적으로 postgres라는 계정이 생성됨 (postgresql 관리하는 계정)
- postgres 계정으로 변경하기: `sudo -i -u postgres`
    > kueyeon:~$ sudo -i -u postgres
- postgesql 접속하기: `psql`
    > postgres:~$ psql
- postgesql 나가기: `\q`
    > postgres=# \q

## <span style="background-color:lightpink; color:gray">postgeSQL의 **데이터베이스명**과 **postgres User(Role)명**과 **Linux 유저 계정**이 동일하게 존재해야함!!</span>
ex) 데이터베이스: 'test' / User: 'test' / 
Linux계정: 'test'  
! role이랑 user랑 같은거인듯  
! `postgres:~$` -> `kueyeon:~$` 이렇게 돌아가려면 `exit`  
1. 리눅스 계정도 하나 파줬다 나는
    > kueyeon:~$ sudo adduser 계정이름
1. 계정 뭐 있나 확인: `\du`
    > postgres=# \du
2. postgres 계정 생성
    > CREATE ROLE {name} {options}
3. 데이터베이스 생성
    > CREATE DATABASE {name}
4. 만든 계정으로 만든 계정의 데이터베이스에 접속하기
    > kueyeon:~$ sudo -u {name} psql -d {name}
5. 접속 정보 확인
    > {name}=# \conninfo

## 기본 사용
- 테이블 생성
    > CREATE TABLE {table_name} (column1 type, column2 type ...)
- 데이터베이스 테이블 리스트: `\d` `\dt`
    > {name}=# \d   //테이블, 시퀀스  
    > {name}=# \dt  //테이블만
- 테이블 불러오기
    > {name}=# select * from {table_name}

나머진 sql 공부하든가 알아서 해야된당

`참고` https://dejavuqa.tistory.com/16
***
# TypeORM
데이터베이스 연결해주는 라이브러리
sql 안 쓰고 자바스크립트로 쓩슝

`참고가 아니라 그냥 정독` https://typeorm.io/select-query-builder