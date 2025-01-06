import React, { FC, ReactNode } from "react";
import { Metadata } from "next";
import "./_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import classNames from "classnames";
import Header from "./_components/Header";
import Container from "./_components/Container";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "The Wild Oasis | %s",
    default: "The Wild Oasis",
  },
  description: "The best hotel ever existed.",
};

interface TRootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<TRootLayoutProps> = (props) => {
  const { children } = props;

  return (
    <html>
      <body
        className={classNames(
          josefin.className,
          "bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative"
        )}
      >
        <Container>
          <Header />

          <div className="flex-1 px-8 py-12">
            <main className="max-w-7xl mx-auto">
              {children}
            </main>
          </div>
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
