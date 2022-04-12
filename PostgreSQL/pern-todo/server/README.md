2022-04-11

# PostgreSQL

## PostgreSQL 시작하기
1. `sudo -i -u {user_name}` 으로 계정 접속
2. `psql` 로 postgresql 접속
3. `\l` 로 **데이터베이스 목록** 확인
4. `\c {database_name}` 으로 데이터베이스 접근
5. `\dt`로 데이터베이스에 있는 **테이블(relataion) 목록** 확인

## PostgreSQL 사용하기
1. `CREATE DATABASE {database_name};` 데이터베이스 생성
2. `CREATE TABLE {table_name}( ... );` 테이블 생성
3. `SELECT * FROM {table_name};` 테이블 확인

***