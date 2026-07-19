---
layout: post
title: How to edit this site (사이트 편집 가이드)
date: 2026-07-19 15:00:00+0900
description: 어느 파일을 고치면 사이트의 어느 부분이 바뀌는지 정리한 개인 유지보수 노트.
tags: guide
categories: meta
---

이 글은 사이트를 직접 수정할 때 **어디를 고치면 되는지** 정리한 노트입니다.
(공개되는 게 싫으면 `_posts/2026-07-19-site-editing-guide.md` 파일을 지우면 됩니다.)

## 1. 편집하는 방법 (설치 없이)

- **연필 아이콘 ✏️** — GitHub에서 아무 파일을 열고 오른쪽 위 연필 → 수정 → _Commit changes_. 간단한 텍스트 수정용.
- **github.dev (추천)** — 저장소 메인에서 키보드 **`.`(마침표)** 를 누르면 브라우저에 VS Code가 열립니다. 여러 파일을 만들고/고치고, 왼쪽 _Source Control_ 에서 커밋. 이미지 업로드도 드래그로 가능.
- **로컬** — clone 후 `bundle exec jekyll serve` → `localhost:4000` 실시간 미리보기.

> ⚠️ 반드시 **`main` 브랜치**에 커밋하세요. `main`에 커밋할 때마다 자동으로 빌드·배포됩니다 (1~2분).

## 2. 어디를 고치나 — 파일 지도

| 바꾸고 싶은 것                            | 파일                                          |
| ----------------------------------------- | --------------------------------------------- |
| 프로필 사진                               | `assets/profile.jpg` (같은 이름으로 덮어쓰기) |
| 소개글 · 연구 관심사 · 연락처 · 부제      | `_pages/about.md`                             |
| 홈 상단 소식(News)                        | `_news/` 에 새 파일 추가                      |
| 논문 **목록**(제목·저자·게재처·배지)      | `_bibliography/papers.bib`                    |
| 논문 **개별 페이지**(초록·My Role)        | `_papers/<슬러그>.md`                         |
| 프로젝트(개요·My Role·기간)               | `_projects/*.md`                              |
| CV(학력·수상·특허·강의·초청강연·봉사)     | `_data/cv.yml`                                |
| 블로그 글                                 | `_posts/YYYY-MM-DD-제목.md` 새 파일           |
| 이메일 · GitHub · LinkedIn · Scholar 링크 | `_data/socials.yml`                           |
| 사이트 제목 · 파비콘 · 플러그인 등 설정   | `_config.yml`                                 |
| 메뉴 이름 / 순서                          | 각 `_pages/*.md` 의 `title:` / `nav_order:`   |

## 3. 자주 하는 작업

### 프로필 사진 바꾸기

`assets/` 폴더에 본인 사진을 **`profile.jpg`** 라는 같은 이름으로 업로드(덮어쓰기)하면 끝.
(github.dev에서 사진을 `assets/` 폴더로 드래그 → 파일명 `profile.jpg` → 커밋)

### 소개글 · 연구 관심사 수정

`_pages/about.md` 의 본문(아래쪽 문단)과 `Research Interests` 목록을 고칩니다.
소속/주소/이메일은 위쪽 `more_info:` 부분입니다.

### 새 소식(News) 추가

`_news/` 에 파일 하나 추가:

```yaml
---
layout: post
date: 2026-09-01 09:00:00+0900
inline: true
---
여기에 한 줄 소식을 씁니다. 🎉
```

### 새 논문 추가 (2단계)

**(1) 목록에 추가** — `_bibliography/papers.bib` 에 항목 추가:

```bibtex
@article{my_key,
  pcat     = {working},       % working / review / journal / conf / pres_intl / pres_dom
  abbr     = {Working},       % 보라색 배지 글씨 (Working / Under Review / Published 등)
  title    = {논문 제목},
  author   = {Park, Jimin and Kim, Hyun-Jung},
  journal  = {게재처},
  year     = {2026},
  selected = {true},          % 홈 'Selected Publications'에 표시하려면
  website  = {/publications/my-slug/}   % 개별 페이지 링크(아래 (2)와 일치)
}
```

`pcat` 값이 Publications 페이지의 어느 섹션에 들어갈지 정합니다.

**(2) 개별 페이지 만들기** — `_papers/my-slug.md` 생성 (파일명 = 위 `website` 슬러그):

```markdown
---
layout: page
title: 논문 제목
description: 게재처, 연도
---

**Authors:** ...

## Abstract

...

## My Role

내가 맡은 역할을 여기에.
```

목록에서 **Website** 버튼을 누르면 이 페이지로 이동합니다.

### 프로젝트 추가/수정

`_projects/` 안의 파일을 고치거나 새로 만듭니다. 각 파일에 `Overview / My Role / Highlights`
섹션이 있고, `importance:` 숫자가 작을수록 앞에 나옵니다. `> ✍️` 로 표시된 자리를 채우면 됩니다.

### CV 항목 추가 (수상·강의·특허·봉사 등)

`_data/cv.yml` 을 고칩니다. 학력/수상은 정해진 형식이 있고, 그 외 섹션(Patents, Teaching,
Invited Talks, Services)은 `- bullet: >- ...` 형태로 한 줄씩 추가하면 됩니다.

### 블로그 글 쓰기

`_posts/2026-09-01-my-title.md` 처럼 파일을 만들고 맨 위에:

```yaml
---
layout: post
title: 글 제목
date: 2026-09-01 10:00:00+0900
description: 한 줄 설명
tags: scheduling llm
categories: research
---
```

그 아래에 마크다운으로 본문을 씁니다.

### 소셜 링크 / 이메일

`_data/socials.yml` 에서 `email`, `github_username`, `linkedin_username`,
`scholar_userid` 등을 채우면 아이콘이 나타납니다.

### 메뉴 이름 / 순서

각 페이지(`_pages/about.md`, `publications.md`, `projects.md`, `cv.md`, `blog.md`)의
`title:` 이 메뉴 이름이고, `nav_order:` 숫자가 순서입니다. `nav: false` 로 두면 메뉴에서 숨겨집니다.

## 4. 저장하면 자동 배포

`main` 브랜치에 커밋 → GitHub Actions가 빌드 → 1~2분 뒤 사이트 반영. 끝!
