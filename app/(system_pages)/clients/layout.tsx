import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../globals.css';
import Sidebar from '@/components/shared/sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div> 
      <main className='flex w-full h-screen justify-center items-center'>
      <Sidebar
        title='Clientes'
        links={[
          { title: 'Dashboard Clientes', path: '/clients' },
          { title: 'Administrar Clientes', path: '/clients/admin-clients' },
          { title: 'Asignar Instructores', path: '/clients/trainer-asignment' },
          { title: 'Asignar Clases', path: '/clients/classes-asignment' },
        ]}
      />
        {children}
        </main>
    </div>
  );
}
