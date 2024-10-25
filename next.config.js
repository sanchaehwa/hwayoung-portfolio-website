// next.config.js
module.exports = {
    reactStrictMode: true,       // React Strict Mode 활성화
    //swcMinify: true,             // 빌드 최적화를 위해 SWC로 코드 압축
    //images: {
     // domains: ['example.com'],  // 외부 이미지 URL 사용 시 도메인 추가
   // },
    i18n: {
      locales: ['en', 'ko'],     // 지원할 언어
      defaultLocale: 'en',       // 기본 언어 설정
    },
  };