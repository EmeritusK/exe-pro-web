import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import SiteNavBar from '@/components/shared/navbar';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] });

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient()
  console.log("CLIENTE");
  console.log(supabase);
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  return (
    <>
      <SiteNavBar></SiteNavBar>
      <main>{children}</main>
    </>
  );
}
