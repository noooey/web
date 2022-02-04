<span style="color: red">사과</span>
<span style='background-color: yellow'>카레</span>
# Chapter 04 CPU 스케줄링

## 01 스케줄링의 개요
### CPU 스케줄러
<span style='background-color: #4452a3'>프로세스가 생성된 후 종료될 때까지 모든 상태 변화를 조정하는 일</span>  
CPU와 시스템 자원을 어떻게 배정할지 결정

### 스케줄링의 단계
- <span style='background-color: #2a4737'>**고수준 스케줄링**</span> 시스템 내의 전체 프로세스 수 조절
- <span style='background-color: #2a4737'>**중간 수준 스케줄링**</span> 중지(보류 상태)와 할성화로 전체 시스템의 활성화된 프로세스 수를 조절하여 과부하를 막음
- <span style='background-color: #2a4737'>**저수준 스케줄링**</span> 어떤 프로세스에 CPU를 할당할지, 어떤 프로세스를 대기 상태로 보낼지 등

![image](https://user-images.githubusercontent.com/66217855/152480147-36d4f1e9-8476-48a8-8c53-8d86b2a33753.png)

### 스케줄링의 목적
- `공평성` 모든 프로세스가 자원을 공평하게 배정받아야 함
- `효율성` 시스템 자원이 유휴 시간이 없이 사용되도록 스케줄링 해야 함
- `안정성` 우선순위를 사용하여 중요 프로세스가 먼저 작동하도록 배정해야 함
- `확장성` 프로세스가 증가해도 시스템이 안정적으로 작동하도록 조치해야 함
- `반응 시간 보장` 시스템은 적절한 시간 안에 프로세스의 요구에 반응해야 함
- `무한 연기 방지` 특정 프로세스의 작업이 무기한 연기되어서는 안 됨

*** 
## 02 스케줄링 시 고려 사항
### 선점형 스케줄링과 비선점형 스케줄링
- <span style='background-color: #2a4737'>**선점형 스케줄링**</span> 어떤 프로세스가 CPU를 할당 받아 실행 중이더라도 운영체제가 CPU를 강제로 빼앗을 수 있음
    - 문맥 교환으로 인한 낭비 발생
- <span style='background-color: #2a4737'>**비선점형 스케줄링**</span> 어떤 프로세스가 CPU를 점유하면 다른 프로세스가 이를 빼앗을 수 없음
    - 문맥 교환으로 인한 낭비 적음
    - 전체 시스템 처리율이 떨어짐

![image](https://user-images.githubusercontent.com/66217855/152481126-6ee42e66-87cf-4c0d-9691-94657fee9f7c.png) 

### 프로세스 우선순위
<span style='background-color: #4452a3'>프로세스의 중요도가 다르므로 우선순위를 사용함  
우선순위가 높은 프로세스 = CPU를 더 먼저, 더 오래 차지</span>   
`커널 프로세스`가 `일반 프로세스`보다 우선순위 높음  

### CPU 집중 프로세스와 입출력 집중 프로세스
>`CPU 버스트` CPU를 할당받아 실행하는 작업  
`입출력 버스트` 입출력 작업  
>
>![image](https://user-images.githubusercontent.com/66217855/152481634-00115636-6fa3-4a77-88e9-6fc65416d50c.png)  

- <span style='background-color: #2a4737'>**CPU 집중 프로세스**</span> `CPU 버스트`가 많은 프로세스
- <span style='background-color: #2a4737'>**입출력 집중 프로세스**</span> `입출력 버스트`가 많은 프로세스

><span style='background-color: #2a4737'>**입출력 집중 프로세스**</span>를 우선순위로 두는 것이 **효율적**  
>
>![image](https://user-images.githubusercontent.com/66217855/152482321-6cf6e9e7-d1b2-472d-bb13-5ee4077c538b.png)

### 전면 프로세스와 후면 프로세스
- <span style='background-color: #2a4737'>**전면 프로세스**</span> 현재 입력과 출력을 사용하는 프로세스, 사용자와 상호작용이 가능 -> CPU 할당 확률이 더 **높음**
- <span style='background-color: #2a4737'>**후면 프로세스**</span> 사용자와 상호작용이 없는 프로세스, 입력X -> CPU 할당 확률이 더 **낮음**

### 정리
![image](https://user-images.githubusercontent.com/66217855/152482764-86f4bc6c-c050-439e-ba9a-818ae53273d9.png)

***
## 03 다중 큐

### 준비 상태의 다중 큐
<span style='background-color: #4452a3'>**우선순위**에 따라 **여러 개의 큐**를 만들어 정리</span>  
**한 번에 하나**의 프로세스를 꺼내어 CPU 할당

![image](https://user-images.githubusercontent.com/66217855/152484656-4e4a2ff7-dc9f-408f-a04f-a7ef073d48eb.png)

### 우선순위 배정 방식
- <span style='background-color: #664b42'>**고정 우선순위 방식**</span> 운영체제가 프로세스에 우선순위를 부여하면 프로세스가 끝날 때까지 **바뀌지 않음** -> **비효율적**
- <span style='background-color: #664b42'>**변동 우선순위 방식**</span> 프로세스 생성 시 부여받은 우선순위가 프로세스 **작업 중간에 변함** -> 시스템 **효율성 향상**

### 대기 상태의 다중 큐
<span style='background-color: #4452a3'>같은 입출력을 기다리는 프로세스의 PCB를 동일한 입출력 큐에 모아놓음</span>  
**여러 개**의 프로세스 제어 블록을 **동시에** 꺼내어 준비 상태로 옮김(인터럽트 벡터 이용)

![image](https://user-images.githubusercontent.com/66217855/152484690-84b4e401-2a93-437b-8098-61ad80fec6e6.png)

### 정리
CPU 스케줄러가 아래 과정 전체를 관리
- PCB는 `준비 상태`의 다중 큐에 삽입되었다가   
- CPU 스케줄러에 의해 `실행 상태`에 옮겨지기도 하고,  
- 입출력 요청이 있으면 `대기 상태`의 다중 큐에 삽입되기도 한다.  
- 입출력이 완료되면 다시 `준비 상태`의 다중 큐로 이동

![image](https://user-images.githubusercontent.com/66217855/152486666-0d975a32-40d6-4f0c-a88d-a4005d58f0d6.png)

***
## 04 스케줄링 알고리즘
<span style='background-color: #2a4737'>**선점형 알고리즘**</span> 프로세스가 CPU를 할당받으면 작업이 끝날 때까지 CPU를 놓지 않음  
<span style='background-color: #2a4737'>**비선점형 알고리즘**</span> 시분할 시스템 고려, 어떤 프로세스가 CPU를 할당 받아 실행 중이라도 운영체제가 CPU를 강제로 빼앗을 수 있음

![image](https://user-images.githubusercontent.com/66217855/152486746-876595a6-6cf6-4fd0-92f5-91d4cfb0cc96.png)

### 스케줄링 알고리즘 선택 기준
- `CPU 사용률` CPU가 사용된 시간 측정
- `처리량` 단위 시간당 작업을 마친 프로세스의 수
- `대기 시간` 
- `응답 시간` 
- `반환 시간` 

> 주로 `대기 시간` `응답 시간` `반환 시간`을 계산
>
> ![image](https://user-images.githubusercontent.com/66217855/152487264-349749bf-4e51-44b8-b33f-0462c71477d9.png)
>- `대기 시간` 프로세스가 생성된 후 실행되기 전까지 대기하는 시간
>- `응답 시간` 첫 작업을 시작한 후 첫 번째 출력이 나오기까지의 시간
>- `실행 시간` 프로세스 작업이 시작된 후 종료되기까지의 시간
>- `반환 시간` 대기 시간을 포함하여 실행이 종료될 때까지의 시간

> 알고리즘 성능 비교 -> 주로 평균 `대기 시간`  
> 모든 프로세스(n개)의 대기 시간 합 / n
>
>![image](https://user-images.githubusercontent.com/66217855/152487756-26c14675-ae37-4c1b-9afc-2cca9d7ecbb2.png)

### FCFS 스케줄링
- 선입선출
- 비선점형
- 큐 1개 : 모든 프로세스는 우선순위가 동일

![image](https://user-images.githubusercontent.com/66217855/152488106-8210142f-b798-4c21-9100-a98cd0b25908.png)

![image](https://user-images.githubusercontent.com/66217855/152488241-69e50498-64de-4b74-8ede-ceea3aa083b9.png)

- 단순
- 공평
- <span style="color: red">콘보이 효과</span>
- 입출력 작업시 효율 떨어짐

### SJF 스케줄링
- 최단 작업 우선
- 비선점형
- 큐 1개

![image](https://user-images.githubusercontent.com/66217855/152488646-1f8a08ea-d1a9-4920-81d4-8f2f26ab4716.png)

![image](https://user-images.githubusercontent.com/66217855/152488677-2ccf6ce8-9417-464b-ac97-6845a73c9605.png)

- 콘보이 효과 완화
- <span style="color: red">공평성 위배</span>
- <span style="color: red">종료 시간 파악 어려움</span>
- <span style="color: red">아사 현상</span>

### HRN 스케줄링
- 최고 응답률 우선
- 비선점형
- 큐 1개

![image](https://user-images.githubusercontent.com/66217855/152489080-3c77e4bc-c59b-4481-9e51-4db03782319e.png)

![image](https://user-images.githubusercontent.com/66217855/152489113-62e65b5e-8aca-441a-ae8a-92d782c14727.png)

- 아사 현상 완화 -> 에이징 구현
- <span style="color: red">공평성 위배</span>

### 라운드 로빈 스케줄링
- 순환 순서 방식, 한 프로세스가 할당받은 시간 동안 작업을 하다가 완료하지 못하면 준비 큐의 맨 뒤로 감
- 선점형
- 큐 1개

![image](https://user-images.githubusercontent.com/66217855/152489377-a59cc421-a168-4fe2-aadb-99c2fe16fe4e.png)

![image](https://user-images.githubusercontent.com/66217855/152489410-e8b68f44-81eb-4e18-89a1-ad9876fe50e1.png)

- 콘베이 효과 완화
- <span style="color: red">문맥 교환 시간 추가</span> -> 적절한 **타임 슬라이스** 크기 중요

**타임 슬라이스가**
- 큰 경우 - 하나의 작업이 끝난 뒤 다음 작업이 시작되는 것 처럼 보임
- 작은 경우 - 문맥 교환에 많은 시간 낭비

### SRT 우선 스케줄링
- 최소 잔류 시간 우선 : SJF + 라운드 로빈
- SJF의 선점형 버전
- 큐 1개

![image](https://user-images.githubusercontent.com/66217855/152489888-41261139-70bc-491d-bfa1-b32bde995237.png)

![image](https://user-images.githubusercontent.com/66217855/152490003-4eb8ebad-c70a-4f00-9324-b4ba9212dc29.png)

- <span style="color: red">현재 실행 중인 프로세스와 큐에 있는 프로세스의 남은 시간을 주기적으로 계산해야 함</span>
- <span style="color: red">문맥 교환</span>
- <span style="color: red">종료 시간 파악 어려움</span>
- <span style="color: red">아사 현상</span>

### 우선순위 스케줄링
- 선점형, 비선점형
- 우선순위 반영
- 고정 우선순위, 변동 우선순위

<span style='background-color: #4452a3'>우선순위는 시스템의 효율성보다 프로세스의 중요도에 따라 정해진다</span>  

- <span style="color: red">공평성 위배</span>
- <span style="color: red">아사 현상</span>
- <span style="color: red">우선순위를 매번 바꿔야 하므로 효율성 저하</span>

### 다단계 큐 스케줄링
- 큐 여러 개 : 우선순위에 따라
- 라운드 로빈 방식 큐
- 고정형 우선순위
- 선점형
- 우선순위에 따라 타임슬라이스 조절

![image](https://user-images.githubusercontent.com/66217855/152490881-ca137c0b-edb3-470e-a9c8-827f4c0547a0.png)

- <span style="color: red">우선순위가 높은 프로세스 때문에 우선순위가 낮은 프로세스의 작업이 연기</span>>

### 다단계 피드백 큐 스케줄링
- 큐 여러 개
- 변동 우선순위 : CPU를 사용하고 난 프로세스의 우선순위가 하나 낮아짐 
- 우선순위에 따라 타임 슬라이스 크기가 다름 (우선순위가 낮아질수록 타임슬라이스 커짐, 마지막은 FCFS 스케줄링)

![image](https://user-images.githubusercontent.com/66217855/152490930-73ccafd2-9b5b-43c0-9a8b-ac332d34e815.png)