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
import { JsonLd } from "@/components/json-ld";
import { PageBackground } from "@/components/page-background";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/react";

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
  description: "Prasenjit Nayak is a Full Stack Developer from India, with expertise in React, Next.js, TypeScript and Node.js. I create modern web applications and have a passion for clean, efficient code. View my portfolio to see my latest projects and technical blog posts.",
  keywords: ["Prasenjit Nayak", "Full Stack Developer", "React Developer", "Next.js Developer", "TypeScript Developer", "Node.js Developer", "Web Developer India", "Software Engineer"],
  authors: [{ name: "Prasenjit Nayak" }],
  creator: "Prasenjit Nayak",
  publisher: "Prasenjit Nayak",
  alternates: {
    canonical: DATA.url,
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
  twitter: {
    card: 'summary_large_image',
    title: 'Prasenjit Nayak | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, TypeScript and Node.js',
    images: [`${DATA.url}/me.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  manifest: "/favicons/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Prasenjit Nayak",
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/favicons/ms-icon-144x144.png",
    "msapplication-config": "/favicons/browserconfig.xml",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable, "font-sans antialiased")}>
        {/* Background container */}
        <div className="fixed inset-0 z-[-1]">
          <PageBackground />
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-2xl mx-auto py-12 sm:py-24 px-6">
          <GoogleAnalytics gaId="G-XVF0SFD4GW" />
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
          <JsonLd />
          <ScrollProgress />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>
              {children}
              <Analytics />
              <SpeedInsights />
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}