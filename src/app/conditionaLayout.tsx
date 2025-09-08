"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import Header from "@/components/Header";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <>
      {!isMainPage && <Header />}
      {children}
      {!isMainPage && <Footer />}
    </>
  );
}
