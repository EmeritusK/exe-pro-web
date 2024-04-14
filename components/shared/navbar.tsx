'use client';
import React from "react";
import { Navbar, NavbarBrand, Image, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Button } from "@nextui-org/react";
import { usePathname } from 'next/navigation';

export default function SiteNavBar() {
  const actualPath = usePathname();

  const isActiveLink = (path: any) => {
    return actualPath === path;
  };

  return (
    <Navbar isBlurred isBordered>
      <NavbarBrand>
        <Image
          height={70}
          width={70}
          alt="Logo EXE-PRO"
          src="https://doulaknugsphsuxvtxcc.supabase.co/storage/v1/object/sign/main/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluL2xvZ28ucG5nIiwiaWF0IjoxNzEyNjE0Mjc4LCJleHAiOjE3NDQxNTAyNzh9.xoSHYSOsceIlOce9hYur6CEJjI5sYbQmXScWG2JUeMs&t=2024-04-08T22%3A11%3A19.222Z "
        />
        <p className="font-bold text-inherit">EXE-PRO</p>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link color={isActiveLink('/clients') ? 'secondary' : 'foreground'} className="font-semibold" href="clients">
            Clientes
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActiveLink('/trainers')}>
          <Link color={isActiveLink('/trainers') ? 'secondary' : 'foreground'} className="font-semibold" href="/trainers">
            Entrenadores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color={isActiveLink('/memberships') ? 'secondary' : 'foreground'} className="font-semibold" href="/memberships">
            Membresias
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly className="p-2" color="default" aria-label="user-settings">
              <p className="font-semibold">SV</p>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Usuario ingresado:</p>
              <p className="font-normal">cambiarDespues@mail.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Configuración Personal</DropdownItem>
            <DropdownItem key="analytics">Estadisticas Clientes</DropdownItem>
            <DropdownItem key="system">Sistema</DropdownItem>
            <DropdownItem key="configurations">Configuraciones</DropdownItem>
            <DropdownItem key="help_and_feedback">Soporte</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Cerrar Sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
