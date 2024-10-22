import "./globals.css";
import { jsonLd } from "./jsonLd";
export { metadata } from './metadata'
import { Red_Hat_Display } from "next/font/google"

const red_hat_display = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['900', '500'],
  variable: "--font-red-hat-display"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${red_hat_display.variable} antialiased h-full`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
