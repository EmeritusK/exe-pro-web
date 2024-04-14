import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../globals.css';
import SiteNavBar from '@/components/shared/navbar';
import Sidebar from '@/components/shared/sidebar';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex'>
      <Sidebar 
      title='Clientes'
      links={[
          { title: 'Administrar Membresias', path: '/memberships/admin-memberships'},
          { title: 'Administrar Ofertas', path: '/memberships/admin-memberships'},
          { title: 'Ver Membresias', path: '/memberships/create-membership' },
        ]}>
        </Sidebar>
      <main>{children}</main>
    </div>
  );
}
