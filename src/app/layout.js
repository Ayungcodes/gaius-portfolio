import "./globals.css";
import ThemeProvider from './context/ThemeProvider';
export const metadata = {
  title: "Gaius Emmanuel | Full-Stack Web Developer",
  description: "Crafting digital experiences where elegance serves purpose. Specializing in high-performance React, Next.js, and robust full-stack architectures.",
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
