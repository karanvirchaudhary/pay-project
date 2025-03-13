'use client';

import { Provider } from "react-redux";
import store from '@/store/store';

import type { Metadata } from "next";

import "./reset.css";
import "./globals.css";

import StyledComponentsRegistry from "./styledComponentsRegistry/registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Manrope:wght@200..800&display=swap');
        </style>
      </head>
      <body>
        <Provider store={store}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
