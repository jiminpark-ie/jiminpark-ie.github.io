# Personal Research Website Manual

이 폴더는 GitHub Pages에 바로 올릴 수 있는 정적 개인 페이지입니다. 별도의 빌드 과정이 없고, `index.html`, `styles.css`, `script.js`, `assets/`만 업로드하면 됩니다.

## 1. 파일 구조

```text
.
├── index.html
├── styles.css
├── script.js
└── assets/
    └── profile-placeholder.svg
```

- `index.html`: 페이지의 기본 문구, 소개, 링크, 타임라인을 수정하는 파일
- `script.js`: 인터랙티브 연구 지도와 publication/project 데이터를 수정하는 파일
- `styles.css`: 색상, 폰트, 간격, 레이아웃을 수정하는 파일
- `assets/`: 프로필 사진, 이미지, PDF 같은 정적 파일을 넣는 폴더

## 2. GitHub Pages로 무료 호스팅하기

GitHub Pages는 HTML, CSS, JavaScript 같은 정적 파일을 GitHub 저장소에서 바로 웹사이트로 공개하는 기능입니다. GitHub Free 계정에서는 public repository로 GitHub Pages를 사용할 수 있습니다.

공식 문서:

- [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
- [Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### 추천 방식: GitHub 웹사이트에서 업로드

Git이 아직 설치되어 있지 않다면 이 방법이 가장 쉽습니다.

1. GitHub에 로그인합니다.
2. 오른쪽 위 `+` 버튼을 누르고 `New repository`를 선택합니다.
3. 저장소 이름을 정합니다.
   - 개인 메인 사이트로 쓰려면: `YOUR_GITHUB_USERNAME.github.io`
   - 프로젝트 사이트로 쓰려면: 원하는 이름, 예: `personal-website`
4. `Public`을 선택합니다.
5. `Create repository`를 누릅니다.
6. 새 저장소 화면에서 `uploading an existing file` 또는 `Add file > Upload files`를 누릅니다.
7. 이 폴더 안의 내용을 업로드합니다.
   - 업로드할 것: `index.html`, `styles.css`, `script.js`, `assets/`
   - 주의: 바깥 폴더 자체가 아니라 폴더 안의 파일들을 올립니다.
8. 아래 commit 메시지는 `Initial personal website` 정도로 적고 `Commit changes`를 누릅니다.
9. 저장소 상단의 `Settings`로 이동합니다.
10. 왼쪽 메뉴에서 `Pages`를 선택합니다.
11. `Build and deployment`에서 다음처럼 설정합니다.
    - `Source`: `Deploy from a branch`
    - `Branch`: `main`
    - folder: `/root`
12. `Save`를 누릅니다.
13. 몇 분 기다린 뒤 Pages 화면에 표시되는 URL로 접속합니다.

주소는 보통 다음 중 하나입니다.

```text
https://YOUR_GITHUB_USERNAME.github.io/
https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME/
```

### 선택 방식: Git 명령어로 업로드

Git for Windows를 설치한 뒤 사용할 수 있습니다.

```powershell
git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/REPOSITORY_NAME.git
git push -u origin main
```

그다음 GitHub 저장소에서 `Settings > Pages`로 이동해 `Deploy from a branch`, `main`, `/root`를 선택합니다.

## 3. 내 정보로 바꾸는 방법

### 사이트 제목과 검색 설명

`index.html`의 `<head>` 안을 수정합니다.

```html
<title>Your Name | Research Portfolio</title>
<meta
  name="description"
  content="Personal research portfolio with an interactive research landscape."
/>
```

예시:

```html
<title>Jiwon Kim | AI Researcher</title>
<meta
  name="description"
  content="Jiwon Kim's research portfolio on human-centered AI and machine learning."
/>
```

### 상단 이름

`index.html`에서 다음 부분을 바꿉니다.

```html
<a class="brand" href="#home" aria-label="Go to home">Your Name</a>
```

### 첫 화면 문구

`index.html`의 hero 영역을 수정합니다.

```html
<p class="eyebrow">PhD Researcher · Machine Learning · Human-Centered AI</p>
<h1>Your Name</h1>
<p class="intro">
  I study how intelligent systems can learn from limited evidence,
  communicate uncertainty, and support decisions in complex human
  settings.
</p>
```

### 이메일과 링크

`index.html`의 `social-links` 부분을 수정합니다.

```html
<li><a href="mailto:you@example.com">Email</a></li>
<li><a href="https://scholar.google.com/" rel="noreferrer">Scholar</a></li>
<li><a href="https://github.com/" rel="noreferrer">GitHub</a></li>
<li><a href="https://www.linkedin.com/" rel="noreferrer">LinkedIn</a></li>
```

사용하지 않는 링크는 해당 `<li>...</li>` 줄을 삭제하면 됩니다.

### 프로필 사진

1. `assets/` 폴더에 사진을 넣습니다. 예: `profile.jpg`
2. `index.html`에서 이미지 경로를 바꿉니다.

```html
<img
  src="./assets/profile.jpg"
  alt=""
  class="portrait"
/>
```

정사각형 사진이 가장 자연스럽고, JPG/PNG/WebP 모두 사용할 수 있습니다.

### About 소개글

`index.html`의 `about-band` 섹션을 수정합니다.

```html
<h2>Research at the edge of models, decisions, and people.</h2>
```

그리고 아래 문단들을 본인 소개로 교체합니다.

```html
<p>
  Replace this paragraph with your short bio.
</p>
```

### Timeline

`index.html`의 `timeline` 목록을 수정합니다.

```html
<li>
  <span class="year">2026</span>
  <strong>Research Fellow / PhD Candidate</strong>
  <p>Institution or lab name, focused on interactive machine learning.</p>
</li>
```

항목을 더 추가하려면 `<li>...</li>` 블록을 복사해서 붙여넣으면 됩니다.

## 4. 인터랙티브 연구 지도 수정하기

연구 지도는 `script.js`의 두 배열로 관리합니다.

```js
const topics = [ ... ];
const projects = [ ... ];
```

### 주제 클러스터 바꾸기

`topics`의 한 항목은 이렇게 생겼습니다.

```js
{
  id: "uncertainty",
  label: "Uncertainty",
  color: "var(--blue)",
  center: [250, 245],
  labelAt: [260, 215],
  blob: "M205,-120 C250,-70 ... Z",
}
```

수정할 값:

- `id`: 코드에서 쓰는 고유 이름입니다. 영어 소문자와 하이픈을 추천합니다.
- `label`: 화면에 보이는 주제명입니다.
- `color`: 주제 색상입니다. `styles.css`의 색상 변수 중 하나를 쓰면 됩니다.
- `center`: 배경 blob의 중심 위치입니다.
- `labelAt`: 주제 라벨이 놓이는 위치입니다.
- `blob`: 배경 모양입니다. 처음에는 그대로 두고 `center`, `labelAt`만 조절해도 충분합니다.

사용 가능한 기본 색상:

```js
"var(--blue)"
"var(--coral)"
"var(--green)"
"var(--gold)"
"var(--teal)"
"var(--violet)"
```

### 프로젝트 / 논문 노드 바꾸기

`projects`의 한 항목은 이렇게 생겼습니다.

```js
{
  id: "calibrated-agents",
  title: "Calibrated Agents",
  shortTitle: "Calibrated Agents",
  status: "In progress",
  color: "var(--blue)",
  x: 238,
  y: 300,
  topics: ["uncertainty", "decision"],
  summary:
    "Methods for agents that know when their predictions are fragile and can ask for evidence before acting.",
  question: "How should a model expose uncertainty when decisions have asymmetric costs?",
  methods: "Bayesian deep learning, selective prediction, model evaluation",
  output: "Workshop paper draft and open evaluation suite",
}
```

수정할 값:

- `id`: 고유 이름입니다. publication 카드의 HTML id로도 쓰입니다.
- `title`: 오른쪽 설명 패널과 publication 카드에 보이는 전체 제목입니다.
- `shortTitle`: 지도 위 노드에 보이는 짧은 제목입니다.
- `status`: `Published`, `Preprint`, `In progress` 같은 상태입니다.
- `color`: 노드 색상입니다.
- `x`, `y`: 지도 위 위치입니다. `x`는 0-1000, `y`는 0-620 범위로 생각하면 됩니다.
- `topics`: 연결할 주제 `id` 목록입니다. 반드시 `topics` 배열에 존재하는 id를 써야 합니다.
- `summary`: 한두 문장 요약입니다.
- `question`: 연구 질문입니다.
- `methods`: 방법론 키워드입니다.
- `output`: 논문, 데이터셋, 프로토타입 등 산출물입니다.

프로젝트를 추가하려면 기존 `{ ... }` 블록을 복사해서 `projects` 배열 안에 붙여넣고 값을 바꾸면 됩니다.

## 5. 색상과 디자인 수정하기

전체 색상은 `styles.css` 맨 위의 `:root`에서 바꿉니다.

```css
:root {
  --bg: #f7f4ef;
  --bg-alt: #ece9e2;
  --ink: #171717;
  --muted: #67635d;
  --blue: #3978b8;
  --coral: #c95f65;
  --green: #4e9a71;
  --gold: #bb8b2f;
  --teal: #438d91;
  --violet: #7c6ea7;
}
```

자주 바꿀 만한 값:

- `--bg`: 전체 배경색
- `--bg-alt`: About/Publications 배경색
- `--ink`: 주요 글자색
- `--muted`: 보조 글자색
- `--blue`, `--coral`, `--green`, `--gold`, `--teal`, `--violet`: 연구 지도 색상

## 6. 로컬에서 미리 확인하기

이 폴더에서 정적 서버를 실행합니다.

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

브라우저에서 접속합니다.

```text
http://127.0.0.1:4173/
```

Python이 없다면 `index.html`을 더블클릭해도 기본 확인은 가능합니다. 다만 브라우저 보안 정책 때문에 로컬 파일 방식에서는 일부 환경에서 동작 확인이 제한될 수 있습니다.

## 7. 업데이트하는 방법

GitHub 웹 업로드 방식:

1. 로컬 파일을 수정합니다.
2. GitHub 저장소로 이동합니다.
3. 수정한 파일을 다시 업로드합니다.
4. `Commit changes`를 누릅니다.
5. 몇 분 뒤 GitHub Pages 사이트가 자동으로 갱신됩니다.

Git 명령어 방식:

```powershell
git add .
git commit -m "Update website content"
git push
```

## 8. 배포 전 체크리스트

- `index.html` 파일이 저장소의 최상위에 있는가?
- `styles.css`, `script.js`, `assets/`도 최상위에 함께 있는가?
- GitHub Pages 설정이 `main` branch와 `/root`로 되어 있는가?
- 저장소가 public인가?
- 프로필 사진 경로가 실제 파일명과 일치하는가?
- `script.js`의 `projects[].topics` 값이 `topics[].id`와 정확히 일치하는가?
- 모바일 화면에서 연구 노드 제목이 너무 길지 않은가?

## 9. 흔한 문제

### 사이트가 404로 보입니다

Pages 배포가 끝나기까지 몇 분 걸릴 수 있습니다. 그래도 안 되면 `Settings > Pages`에서 branch와 folder 설정을 다시 확인합니다.

### CSS가 적용되지 않습니다

`styles.css`가 `index.html`과 같은 위치에 있어야 합니다. 현재 경로는 다음처럼 되어 있습니다.

```html
<link rel="stylesheet" href="./styles.css" />
```

### 연구 지도가 비어 있습니다

`script.js`가 같은 위치에 있어야 합니다.

```html
<script src="./script.js"></script>
```

브라우저 개발자 도구의 Console에서 오류를 확인하면, 대개 `topics` id와 `projects`의 `topics` 값이 서로 맞지 않을 때 문제가 납니다.

### GitHub Pages 주소가 예상과 다릅니다

- 저장소 이름이 `YOUR_GITHUB_USERNAME.github.io`이면 주소는 `https://YOUR_GITHUB_USERNAME.github.io/`입니다.
- 저장소 이름이 다른 이름이면 주소는 `https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME/`입니다.

