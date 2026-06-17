import "./globals.css";
import ThemeProvider from './context/ThemeProvider';
import LenisProvider from "./components/LenisProvider";
import CustomCursor from "./components/CustomCursor";

export const metadata = {
  title: "Gaius Emmanuel | Full-Stack Web Developer",
  description: "Crafting digital experiences where elegance serves purpose. Specializing in high-performance React, Next.js, and robust full-stack architectures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LenisProvider>
          <ThemeProvider>
            <CustomCursor />
            {children}
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
