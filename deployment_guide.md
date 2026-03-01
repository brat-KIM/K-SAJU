# API 보안 및 배포 가이드 (K-SAJU)

본 서비스는 Google Gemini API를 사용하며, 보안을 위해 API 키를 소스 코드에 직접 노출하지 않고 환경 변수(`.env`)를 통해 관리해야 합니다.

## 1. 환경 변수 설정 (.env)

프로젝트 루트 디렉토리에 `.env` 파일을 생성하고 다음과 같이 API 키를 입력하세요.

```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

> [!WARNING]
> `.env` 파일은 절대 GitHub 등 공개 저장소에 올리지 마세요. 현재 `.gitignore`에 추가되어 있는지 확인하십시오.

## 2. 코드 내 사용법 (Vite)

Vite 프로젝트에서는 `import.meta.env`를 통해 환경 변수에 접근합니다.

```javascript
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
```

## 3. 배포 시 설정 (Vercel, Netlify 등)

Vercel이나 Netlify 같은 배포 플랫폼을 사용할 경우, 해당 서비스의 **Environment Variables** 설정 섹션에서 `VITE_GEMINI_API_KEY`라는 이름으로 API 키를 추가해야 합니다.

## 4. .gitignore 확인

`.gitignore` 파일에 다음 라인이 포함되어 있는지 확인하세요.
```text
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```
