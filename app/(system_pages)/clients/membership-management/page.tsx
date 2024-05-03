'use client';
import { createMembership, deleteMembership, getMemberships } from "@/data/getMemberships";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function TrainerAssignmentsPage() {
  const { isOpen: isAddModalOpen, onOpen: onAddModalOpen, onOpenChange: onAddModalOpenChange } = useDisclosure();
  const [plans, setPlans] = useState<Membership[]>([]);
  const [newPlan, setNewPlan] = useState<Membership>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    benefits: [],
  });

  useEffect(() => {
    fetchMembershipsData();
  }, []);

  async function fetchMembershipsData() {
    const data = await getMemberships();
    //console.log(data);
    setPlans(data);
  }

  const handleSubmit = async () => {
    if (!newPlan) return;
    await createMembership(newPlan);
    window.location.reload()
  }

  const handleDelete = async (id: number) => {
    await deleteMembership(id);
    window.location.reload();
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex-grow flex items-center justify-center p-24">
        <div className="flex-row">
        <Button onPress={onAddModalOpen} color="secondary" aria-label="Agregar">
          Agregar <IoMdAdd />
        </Button>
        <div className="flex flex-wrap items-center" >
          {
            plans.map((plan) => (
              <Card className="m-4 w-96">
                <CardHeader className="flex gap-3" >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                      <p className="text-md mr-2">{plan.name}</p>
                      <MdDelete className="cursor-pointer" color="red" onClick={() => handleDelete(plan.id)} />

                    </div>

                    <p className="text-small text-default-500">{plan.price}</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>{plan.description}</p>
                </CardBody>
                <Divider />
                <CardFooter>
                </CardFooter>
              </Card>

            ))
          }
        </div>
      </div>
        </div>
      <Modal isOpen={isAddModalOpen} onOpenChange={onAddModalOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Agregar Membresia</ModalHeader>
              <ModalBody>
                <div className="flex items-center">
                  <Input
                    className="ml-2"
                    autoFocus
                    label="Nombre Membresia"
                    variant="bordered"
                    onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
                  />
                  <Input
                    className="ml-2"
                    autoFocus
                    label="Precio membresia"
                    variant="bordered"
                    type="number"
                    onChange={(e) => setNewPlan({ ...newPlan, price: parseInt(e.target.value) })}
                  />
                </div>
                <div className="flex">
                  <Input
                    className="ml-2"
                    autoFocus
                    label="Descripcion membresia"
                    variant="bordered"
                    onChange={(e) => setNewPlan({ ...newPlan, description: e.target.value })}
                  />
                </div>

                <Button type="submit" color="secondary" onPress={handleSubmit}>Agregar</Button>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default TrainerAssignmentsPage;