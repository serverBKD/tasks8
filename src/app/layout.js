import "./globals.css";
import { OrbitronBlackFont } from "../services/fonts/fonts.js";

export const metadata = {
  title: "Task Manager",
  description: "Task Manager [T-8] app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${OrbitronBlackFont.className} antialiased `}>{children}</body>
    </html>
  );
}
