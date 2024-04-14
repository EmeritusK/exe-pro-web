import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import SiteNavBar from '@/components/shared/navbar';
import Sidebar from '@/components/shared/sidebar';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteNavBar></SiteNavBar>
      <main>{children}</main>
    </>
  );
}
