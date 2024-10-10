import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "dark:bg-gray-900 bg-gray-100 transition-colors duration-500 font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="">
            <Navbar />
            <main className="container mx-auto flex-grow">
              {children}
            </main>
            <footer className="bg-gray-100 dark:bg-gray-900 dark:text-white text-black py-4 text-center border-t border-gray-300 dark:border-gray-700">
              <p className="mb-1">
                &copy; {new Date().getFullYear()} Portfolio ❤️. All rights reserved.
              </p>
              <p className="text-sm">Designed by Sanele Hlongwane</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
