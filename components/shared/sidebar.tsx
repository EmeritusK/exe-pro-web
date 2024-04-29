'use client';
import { Link } from "@nextui-org/react"; // Asumiendo que este es el componente Link que estás usando
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarProps {
  title: string;
  links: { title: string; path: string }[];
}

export default function Sidebar(props: SidebarProps) {
  const actualPath = usePathname();
  const isActiveLink = (path: any) => {
    return actualPath === path;
  };

  return (
    <div className="w-64 h-full">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-white font-bold">{props.title}</h1>
      </div>
      <div className="p-4">
        <ul>
          {props.links.map((link) => (
            <li key={link.title} className="mb-4">
              <Link href={link.path} color={isActiveLink(link.path) ? 'secondary' : 'foreground'} style={{ fontWeight: isActiveLink(link.path) ? '600' : 'normal' }}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
