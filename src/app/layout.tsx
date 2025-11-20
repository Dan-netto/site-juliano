import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="min-h-screen bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
