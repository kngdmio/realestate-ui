import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kngdm.io/re",
  description: "kngdm.io/re template site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// Can also add class='dark' to the html tag to enable system theme detection Docs --> (https://v2.tailwindcss.com/docs/dark-mode)
//  Like this: <html lang="en" class="dark">
