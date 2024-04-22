'use client';
import SiteNavbar from "@/components/shared/navbar";
import { getClient } from "@/data/getClients";
import { Button } from "@nextui-org/react";

function HomePage() {

  const clickAction = async () => {await getClient('1')};

  return (
    <div>
      <h1>HOME</h1>
      <Button onClick={clickAction}>
        Ver Clientes
      </Button>
    </div>
  );
}

export default HomePage;