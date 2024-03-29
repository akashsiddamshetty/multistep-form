import "./globals.css";
import type { Metadata } from "next";
import Main from "@/components/Main";
import Aside from "@/components/Aside";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata: Metadata = {
  title: "Multi step form",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="sm:flex w-full h-screen sm:items-center sm:justify-center">
        <ReduxProvider>
          <Main>
            <Aside />
            {children}
          </Main>
        </ReduxProvider>
      </body>
    </html>
  );
}
