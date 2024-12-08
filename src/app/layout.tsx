import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
// import { CustomCursor } from "@/components/custom-cursor";
import { VisitorCounter } from "@/components/visitor-counter";
// import { Analytics } from "@vercel/analytics/react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Prasenjit Nayak | Full Stack Developer",
    template: `%s | Prasenjit Nayak`,
  },
  description: "Prasenjit Nayak is a Full Stack Developer from India, specializing in React, Next.js, TypeScript and Node.js. Visit my portfolio to learn more about my work and projects.",
  verification: {
    google: "-hh6IhDqq2ehQA92ykUXPEhlQWxTHFvptR9Fv_V0gDo",
  },
  openGraph: {
    title: "Prasenjit Nayak | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, TypeScript and Node.js. Check out my portfolio, projects and blog posts.",
    url: DATA.url,
    siteName: "Prasenjit Nayak - Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/me.png`,
        width: 1200,
        height: 630,
        alt: "Prasenjit Nayak - Full Stack Developer"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Prasenjit Nayak | Full Stack Developer",
    card: "summary_large_image",
    description: "Full Stack Developer from India. React, Next.js, TypeScript expert. View my work and get in touch.",
    images: [`${DATA.url}/me.png`],
    creator: "@Star_Knight12"
  },
  alternates: {
    canonical: DATA.url
  },
  keywords: [
    'Prasenjit',
    'Prasenjit Nayak',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Web Developer India',
    'Prasenjit Portfolio',
    'Star Knight Developer',
    'prasen.dev'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "p73rco1nfp");
          `}
        </Script>
        <ScrollProgress />
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            {/* <Analytics/> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
