import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://avspire.com"),
  title: { default: "Avspire | Audio-Visual Programming", template: "%s | Avspire" },
  description:
    "Avspire is an audio-visual programming company delivering show control, DSP, video mapping and interactive media.",
  openGraph: {
    title: "Avspire | Audio-Visual Programming",
    description: "Show control, DSP, video mapping and interactive media programming.",
    type: "website",
    siteName: "Avspire",
  },
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
