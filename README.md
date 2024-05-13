# slg-cli

Command Line Interface tool for [Sluggish Hackers](https://sluggish.at)

## Prerequisite

### 1. Google Apps

1. [Google Credentials](https://console.cloud.google.com/apis/credentials) 페이지에서 Service Account 키파일을 `json` 형태로 다운로드
2. `GOOGLE_APPLICATION_CREDENTIALS` 이름의 환경변수에 1번에서 받은 키파일 위치를 추가 (예: `~/.zshrc`)

```zsh
# ~/.zshrc
export GOOGLE_APPLICATION_CREDENTIALS="/Users/hoony/Downloads/key.json
```

## Commands

### 1. ogk

#### ogk:contents

```bash
slg ogk:contents --org opengirok --repo foia-data-repository --path 2022-11-16__안전재난과-15761_이태원_사고_관련_국무총리_지시사항_전파_문서를_정보공개_청구합니다_
```

**flags**
- repo (*required*): ogk로 관리하고 있는 github 레포지토리명
- org: ogk로 관리하고 있는 github 레포지토리가 속한 조직명
- path: `dir` 유형의 주소 내에 속한 상세 파일 목록을 조회하고 싶을 때 `dir` 이름

## Test

```zsh
pnpm install
pnpm test
```