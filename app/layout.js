import DarkLight from "@/components/DarkLight";
import Theme from "@/components/Theme";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "eyeganeshgupta",
  description:
    "My name is Ganesh Gupta, a Full Stack JavaScript and Java Developer with a passion for creating dynamic web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}
