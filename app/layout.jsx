import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={jetbrainsMono.variable} style={{height : "100%"}}>
        {children}
      </body>
    </html>
  );
}