'use client';
import SiteNavbar from "@/components/shared/navbar";
import { getMember,getMembers } from "@/data/membersService";
import { getTrainer, getTrainers } from "@/data/getTrainers";
import { Button } from "@nextui-org/react";

function HomePage() {

  const clickAction = async () => {await getMembers()};

  return (
    <div>
      <h1>HOME</h1>
      <Button onClick={clickAction}>
        Ver Cliente
      </Button>
    </div>
  );
}

export default HomePage;