import Link from "next/link";
import "doodle.css/doodle.css";
import "./globals.css";

export const metadata = {
  title: "Line Notes",
  description: "Example app for Front end beast mode",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="doodle">
        <nav>
          <h1>
            <Link href="/">Line Notes</Link>
          </h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
