export const metadata = {
  title: "결과지 문구 웹앱",
  description: "문구를 쉽게 선택하고 복사할 수 있는 도우미",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}