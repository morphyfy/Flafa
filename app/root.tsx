import { Links, LiveReload, Meta, Outlet, Scripts } from "remix";
import type { MetaFunction } from "remix";
import React from "react";
import Navbar from "~/layout/Navbar/navbar";
import Footer from "~/layout/Footer/footer";

interface IDocument {
  title?: string;
  children: React.ReactNode;
}

export const meta: MetaFunction = () => {
  const description = `My Blog`;
  const title = `Ioofy. Just people who want lo learn anythings`;

  return {
    description,
    title,
    keywords: "Blog App With Remix",
    "twitter:image": "https://remix-jokes.lol/social.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@ioofy",
    "twitter:site": "@ioofy",
    "twitter:title": "Blog App With Remix",
    "twitter:description": description,
  };
};

function Document({ children }: IDocument) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Links />
        <Meta />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
