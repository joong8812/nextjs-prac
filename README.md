# F... Site
## Contributer
- @joong8812 (최중재)

## Tech Requirement (Tech Stack)
- Create-next-app
- Next.js
- TypeScript
- ESlint
- Babel 설정 (IE 11 대응)

## Docker
- Dockerfile을 이용해서 Docker Container
- Docker Compose를 사용하고 있습니다.

## Script
```
$ npm run dev
```

```
$ npm run build
$ npm run deploy
```

## 테스트
- Jest
```
# install
$ npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest identity-obj-proxy react-test-renderer

# test
$ npm run test
```
- E2E 테스트 > 실제 동작을 바탕으로 기능을 점검