# 🚀 Dadok Dadok — MSA Version (Frontend)


## 한 줄 소개
Next.js 기반의 읽기 기록 서비스 UI (Proof-of-Concept)


## 프로젝트 상태
Proof-of-Concept: API Gateway를 통해 Backend 서비스와 로컬 통신 완료.


## 기술 스택
| Category | Technologies |
|----------|--------------|
| Architecture | Microservices (MSA) via API Gateway |
| Framework | Next.js (TypeScript) |
| Styling | CSS Modules |
| Data Fetching | Axios |
| API Integration | Naver Books API, Backend RESTful APIs (via API Gateway) |
| Routing | Next.js Router |
| Collaboration | Git/GitHub, Postman, Notion |
| Dev Environment | VS Code, Chrome DevTools |

## 설치 & 실행
```bash
git clone https://github.com/deerking0923/ezen-main-frontend.git
cd dadok-msa-frontend
npm install
npm run dev
```


## 환경 변수 (`.env`)
```dotenv
DATA4LIBRARY_AUTH_KEY(도서정보나루)
NAVER_CLIENT_ID(네이버 API ID)
NAVER_CLIENT_SECRET(네이버 API KEY)
NEXT_PUBLIC_API_GATEWAY_URL=http://localhost:8000
```


## 주요 기능
| 페이지 | 설명 |
|--------|------|
| 홈 | 인기도서 5개. 커뮤니티 게시판. 내 서재 가기 |
| 도서 상세 보기 | 도서 상세보기 페이지에서 내 서재 추가 버튼으로 추가. 각 도서마다 리뷰 |
| 도서 수정/삭제 | 각 도서 기록 수정 및 삭제 가능 |
| 도서 기록 페이지 | 기록한 도서 상세 보기 |
| 커뮤니티 게시판 | 제목/내용으로 글 작성 가능 |
| 회원 기능 | 회원 가입/로그인 (추후 구현) |



## 학습 포인트
- Next.js 페이지 라우팅 및 서버 사이드 렌더링(SSR) 이해
- 환경 변수 기반 API 연동

