import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export default function LoginCard() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="max-w-[400px] w-96">
        <CardHeader className="flex gap-3 items-center justify-center">
          <div className="flex items-center justify-center">
          <Image
            height={150}
            width={150}
            alt="Logo EXE-PRO"
            src="https://doulaknugsphsuxvtxcc.supabase.co/storage/v1/object/sign/main/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluL2xvZ28ucG5nIiwiaWF0IjoxNzEyNjE0Mjc4LCJleHAiOjE3NDQxNTAyNzh9.xoSHYSOsceIlOce9hYur6CEJjI5sYbQmXScWG2JUeMs&t=2024-04-08T22%3A11%3A19.222Z "
          />
          <p className="text-xl font-semibold">EXE-PRO</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="email" label="Correo Electrónico" />
            <Input type="password" label="Contraseña" />
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="items-center justify-center">
          <Button color="secondary" className="font-semibold">Iniciar Sesion</Button>
        </CardFooter>
      </Card>
    </div>

  );
}
