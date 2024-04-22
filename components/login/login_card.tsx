'use client';
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { login } from "./actions";

export default function LoginCard() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
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
          <div className="md:flex-nowrap gap-4">
            <form 
              className="flex-1 flex flex-col w-full justify-center gap-2">
              <Input
                label="Email"
                variant="bordered"
                placeholder="Ingrese su correo electronico"                
                className="flex-grow"
                id="email" name="email"
              />
              <div className="px-2"></div>
              <Input
                label="Contraseña"
                variant="bordered"
                placeholder="Ingrese su contraseña"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <IoEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="flex-grow"
                id="password" name="password"
              />
              <div className="px-6"></div>
              <Button color="secondary" formAction={login} type="submit">Iniciar Sesion</Button>
            </form>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="items-center justify-center">
        </CardFooter>
      </Card>
    </div>

  );
}
