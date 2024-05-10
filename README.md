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

## Test

```zsh
pnpm install
pnpm test
```