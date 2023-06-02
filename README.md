## 개발 환경

-   Node.js (ver. 16.14.2)
-   MySQL (ver. 8.0.30)

## Init setting

```bash
# .env 파일 내에 실행자 MySQL user, password, schema 입력
# (아래는 예시 입니다)

DB_USERNAME=#(MySQL user 입력)
DB_PASSWORD=#(MySQL password 입력)
DB_DATABASE=#(사용할 MySQL schema 입력)
```

## 실행 방법

```bash
# 다운로드 받은 폴더로 경로 이동
$ cd wemadeTest-main

# 의존성 설치
$ npm install
```

```bash
# build
$ npm run build

# run
$ npm run start:prod
```

## API TEST

```bash
# Swagger link
# localhost:3000/api
```

### 과제 진행하면서 느낀점

-   사실 블록체인에 대한 기반지식이 전혀없이 지원을 했고, 해당 과제를 받아 시작했습니다. 일단 과제의 완성이 우선이라 생각해 구현을 진행해 완성했지만, 외부에서 불러온 데이터가 제대로 된 데이터인지와 같은 판단이 안되는 문제가 있어 과제를 진행하면서 블록체인에 대해 전반적으로 이해하려 노력했습니다.
