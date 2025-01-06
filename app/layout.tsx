import React, { FC, ReactNode } from "react";
import Navigation from "./_components/Navigation";
import { Metadata } from "next";
import Logo from "./_components/Logo";
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

          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
