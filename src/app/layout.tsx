import "./globals.css";

export const metadata = {
  title: "Youtube Loadtree",
  description: "무료 인터넷 강의 로드맵 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
