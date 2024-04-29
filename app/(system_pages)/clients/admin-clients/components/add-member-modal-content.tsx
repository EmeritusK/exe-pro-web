'use client';
import { getMemberships } from "@/data/getMemberships";
import { useDisclosureStore } from "@/stores/modal-add-member-store";
import { Button, Checkbox, DatePicker, Input, Link, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { FaClipboardUser } from "react-icons/fa6";
import { IoMail, IoPhonePortraitOutline } from "react-icons/io5";
import { MdGpsFixed, MdOutlinePhoneAndroid } from "react-icons/md";

export default function AddMemberContent() {

  const [plans, setPlans] = useState<Membership[]>([]);


  useEffect(() => {
    fetchMembershipsData();
  }, []);

  async function fetchMembershipsData() {
    const data = await getMemberships();
    console.log(data);
    setPlans(data);
  }

  const genres = [
    { label: "Masculino", value: "M" },
    { label: "Femenino", value: "F" },
    { label: "Otro", value: "O" },
  ];

  const membership_times = [
    { label: "Mensual", value: "MENSUAL" },
    { label: "Trimestral", value: "TRIMESTRAL" },
    { label: "Semestral", value: "SEMESTRAL" },
    { label: "Anual", value: "ANUAL" },
  ];

  const { onOpenChange } = useDisclosureStore();


  return (
    <>
      <div className="flex items-center">
        <Input
          autoFocus
          endContent={
            <FaClipboardUser className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Nombre"
          placeholder="Escriba su nombre"
          variant="bordered"
        />
        <Input
          className="ml-2"
          autoFocus
          endContent={
            <FaClipboardUser className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Apellido"
          placeholder="Escriba su apellido"
          variant="bordered"
        />
      </div>
      <Input
        autoFocus
        endContent={
          <IoMail className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Email"
        placeholder="Escriba su email"
        variant="bordered"
      />
      <DatePicker label="Fecha de Nacimiento" variant="bordered" />
      <Input
        autoFocus
        endContent={
          <MdOutlinePhoneAndroid className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Telefono"
        placeholder="Escriba su numero de telefono"
        variant="bordered"
      />
      <Input
        autoFocus
        endContent={
          <MdGpsFixed className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Direccion"
        placeholder="Escriba su direccion"
        variant="bordered"
      />
      <div className="flex items-center">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mr-2">
          <Select
            label="Genero"
            variant="bordered"
          >
            {genres.map((genre) => (
              <SelectItem key={genre.value} value={genre.value}>
                {genre.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Select
            label="Tiempo de Membresia"
            variant="bordered"
          >
            {membership_times.map((membership_time) => (
              <SelectItem key={membership_time.value} value={membership_time.value}>
                {membership_time.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mr-2">
          <Select
            label="Tipo de Membresia"
            variant="bordered"
          >
            {plans.map((plan) => (
              <SelectItem key={plan.id} value={plan.id}>
                {plan.name + ` ( $ ${plan.price} )`}
              </SelectItem>
            ))}
          </Select>
        </div>
      <div className="flex items-center justify-center">
        <Button color="primary" className="mr-4" >
          Guardar
        </Button>
        <Button color="danger" onPress={onOpenChange}>
          Cancelar
        </Button>
      </div>

    </>
  );
}