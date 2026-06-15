import "./globals.css";
import ThemeProvider from './context/ThemeProvider';
export const metadata = {
  title: "Gaius.dev",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
