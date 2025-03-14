import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "../app//components/SessionWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Engineering India",
  description: "Engineering India - Free Resources & Skill Development Club",
  openGraph: {
    title: "Engineering India",
    description: "Engineering India - Free Resources & Skill Development Club",
    url: "https://engineeringindia.com/", // Update with your actual URL
    type: "website",
    images: [
      {
        url: "/vercel.svg", // Update with your actual OG image URL
        alt: "Engineering India Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>Engineering India - Free Resources & Skill Development Club</title>
        <meta
          name="description"
          content="Engineering India: Join our free club to access leading resources, develop engineering skills, and grow your career with expert guidance and community support."
        />
            <meta name="google-site-verification" content="ghKlsCYI2p-BeL5UrSoIppnQmRAi7aaCSKV5oF9UpYs" />
        <meta
          name="keywords"
          content="Engineering India, free engineering resources, skill development, engineering club, career growth, India engineering community"
        />
        <meta name="author" content="Engineering India Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Engineering India - Free Resources & Skill Development Club" />
        <meta
          property="og:description"
          content="Discover Engineering India, a free club offering resources and community support to develop engineering skills and boost your career."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.engineeringindia.com" />
        <meta property="og:image" content="/vercel.svg" />
        <meta property="og:site_name" content="Engineering India" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Engineering India - Free Resources & Skill Development Club" />
        <meta
          name="twitter:description"
          content="Join Engineering India to access free resources, develop engineering skills, and grow with our supportive community."
        />
        <meta name="twitter:image" content="https://www.engineeringindia.com/images/twitter-image.jpg" />

        {/* Viewport for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical URL to Avoid Duplicate Content */}
        <link rel="canonical" href="https://www.engineeringindia.com" />


        {/* Favicon for Branding */}
        <link rel="icon" href="/favicon.ico" />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Engineering India",
      "url": "https://engineeringindia.com",
      "description": "A free club providing leading engineering resources and skill development opportunities in India.",
      "logo": "https://engineeringindia.com/vercel.svg",
      "foundingDate": "2025",
    })}
  </script>
</head>
      <SessionWrapper>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      </SessionWrapper>
    </html>
  );
}
