all-life 백엔드 코드
---
npm 패키지
pipe 구현

```
npm install class-validator class-transformer --save
```

db연결
typeorm, postgres

```
npm install pg typeorm @nestjs/typeorm --save
```

config 함께 관리하기

```
npm install config --save
```

인증 관련 모듈 설치

```
암호화
npm install bcryptjs --save
import * as bcrypt from 'bcryptjs'
```
```
jwt와 passport 모듈
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
```

shelterChecklistAnswers
```
{
    "answers": [
        {
            "q_id": 100,
            "score": 9
        },
        {
            "q_id": 1,
            "score": 1
        },
        {
            "q_id": 2,
            "score": 1
        },
        {
            "q_id": 3,
            "score": 1
        },
        {
            "q_id": 4,
            "score": 1
        },
        {
            "q_id": 5,
            "score": 0
        },
        {
            "q_id": 6,
            "score": 0
        }
    ]
}
```

api테스트
1. 회원가입 2개 하기
2. 질문 넣기
3. 대피소 넣기
4. 회원 2개로 대피소 평가하기
