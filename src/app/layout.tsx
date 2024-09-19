import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/provider/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import ProgressBar from "@/util/ProgressBar";
import { SpeedInsights } from "@vercel/speed-insights/next"
// import '@uploadcare/react-widget/dist/uploadcare.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Write Flow",
  description: "Home Page For Write Flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
