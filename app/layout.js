import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
// *** Navbar and other components are not imported here, but they are used in ThemeProvider function imported above
// *** Explained here: https://stackoverflow.com/questions/74992326/does-use-client-in-next-js-13-root-layout-make-whole-routes-client-component#answer-76533664

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
        <div>
          <ThemeProvider
            defaultTheme="system"
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}

// Can also add class='dark' to the html tag to enable system theme detection Docs --> (https://v2.tailwindcss.com/docs/dark-mode)
//  Like this: <html lang="en" class="dark">
