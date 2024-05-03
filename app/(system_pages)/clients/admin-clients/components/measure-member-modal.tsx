'use client';
import { getMemberships } from "@/data/getMemberships";
import { createMeasure, getMeasures } from "@/data/memberMeasureService";
import { createMember, getMember, getUserData, updateMember } from "@/data/membersService";
import { useMemberStore } from "@/stores/members-store";
import { useDisclosureStore } from "@/stores/modal-add-member-store";
import { Button, Checkbox, DatePicker, Divider, Input, Link, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { useEffect, useState } from "react";
import { FaAddressCard, FaClipboardUser } from "react-icons/fa6";
import { IoMail, IoPhonePortraitOutline } from "react-icons/io5";
import { MdGpsFixed, MdOutlinePhoneAndroid } from "react-icons/md";

interface TableProps {
id: number;
}

export default function AddMeasureModalContent(props: TableProps) {

  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    const data = await getMeasures(props.id);
    const user = await getUserData();
    console.log(user);
    setData(data);
  }

  const [data, setData] = useState<MemberMeasure[]>([]);
  const [measure,setMeasure] = useState<MemberMeasure>({
    id:0,
    member_id: props.id,
    weight: 0,
    date: new Date(),
  });


  const { onOpenChange } = useDisclosureStore();


  const onAddMeasure = async () => {
    await createMeasure(measure);
    window.location.reload();
  };



  return (
    <>
                {
            data.map((measure) => (
              <div className="flex items-center">
              <p className="text-md font-bold mr-4">Peso: {measure.weight} KG</p>
              <h4 className="text-md font-bold">Fecha: {measure.date.toString().split("T")[0]}</h4>
              </div>
            ))
          }
      <div className="flex-row items-center">
        <p className="text-md mb-2">
          Ingrese su nuevo peso:
        </p>
        <p className="text-xl font-bold mb-2">
          <Input type="number" onChange={(e) => setMeasure({ ...measure, weight: parseInt(e.target.value)})}>
          </Input>
        </p>
        <Divider></Divider>
      </div>
      <div className="flex items-center justify-center">
        <Button color="primary" className="mr-4" onPress={onAddMeasure} type="submit">
          Guardar
        </Button>
        <Button color="danger" onPress={onOpenChange}>
          Cancelar
        </Button>
      </div>

    </>
  );
}