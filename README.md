# 프로젝트 배포 가이드

## 1. gh-pages 패키지 설치
React 프로젝트를 GitHub Pages에 배포하려면 `gh-pages` 패키지를 설치해야 합니다.

```bash
npm install --save-dev gh-pages
```
--save-dev 옵션은 해당 패키지를 개발용 의존성(devDependencies) 으로 설치합니다.
즉, gh-pages는 배포 과정에서만 필요하고 실제 서비스 실행에는 필요 없기 때문에
"dependencies"가 아닌 "devDependencies"에 추가됩니다.


## 2. package.json 수정
(1) homepage 추가
```json
"homepage": "https://<GitHub_계정명>.github.io/<레포지토리명>"
homepage의 역할
React 빌드 과정에서 정적 파일(JS, CSS, 이미지 등)의 기준 경로(base URL) 로 사용됩니다.
```
GitHub Pages에서 https://username.github.io/my-app/ 경로로 접근할 때,
내부 파일 경로도 /my-app/static/... 형태로 맞춰주어야 정상 동작합니다.

예시:

```html
<!-- homepage 미설정 시 -->
<script src="/static/js/main.12345.js"></script>

<!-- homepage 설정 후 -->
<script src="/my-app/static/js/main.12345.js"></script>
```
(2) scripts 수정
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
## 3. Router 설정
React Router를 사용하는 경우 BrowserRouter에 basename을 지정해야 합니다.

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter basename="/<레포지토리명>/">
  <App />
</BrowserRouter>
```
필요 시 패키지를 설치합니다.

```bash
npm install react-router-dom
```
## 4. Build & Deploy
```bash
npm run build
npm run deploy
```
npm run build → 빌드 폴더(build/) 생성

npm run deploy → gh-pages 브랜치에 업로드 → GitHub Pages에 반영
