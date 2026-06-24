import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "next-themes";
import { Providers } from "@/components/providers";
import { Navibar } from "@/app/components/Navibar";
import SignedIn from "@/app/components/SignedIn";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-mono", jetbrainsMono.variable)}
    >
      <body className="antialiased min-h-svh flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <SignedIn>
              <Navibar />
            </SignedIn>
            <main className="flex flex-1 flex-col min-h-0">{children}</main>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
