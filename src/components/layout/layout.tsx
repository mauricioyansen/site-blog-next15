import { Inter } from "next/font/google";
import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${inter.className} relative flex min-h-screen flex-col bg-gray-700 font-inter`}
    >
      <Header />
      <main className="flex-1 flex flex-col pt-10 md:pt-0 lg:pt-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};
