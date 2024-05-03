'use client';
import { getMemberships } from "@/data/getMemberships";
import { createMember, getMember, updateMember } from "@/data/membersService";
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

export default function ViewMemberContent(props: TableProps) {

  const [plans, setPlans] = useState<Membership[]>([]);
  const [member, setMember] = useState<Member>();

  useEffect(() => {
    fetchMembershipsData();
    fetchData();
  }, []);


  async function fetchData() {
    const data = await getMember(props.id);
    console.log(data);
    setMember(data);
  
  }

  async function fetchMembershipsData() {
    const data = await getMemberships();
    //console.log(data);
    setPlans(data);
  }

  useEffect(() => {
    if (member) {
      setName(member.name || "");
      setLastName(member.lastname || "");
      setIdNumber(member.id_card || "");
      setEmail(member.email || "");
      setPhone(member.phone || "");
      setAddress(member.address || "");
      setGenre(member.genre || "");
      setMembershipTime(member.membershipTime || "");
      setMemebershipId(member.membershipId || 0);
      setMembership(member.membership || "");
      setAvatar(member.avatar || "");
      setStatus(member.status || "");
      setDateOfBirth(member.dateOfBirth || new Date());
      setMembershipPlan(member.membership || "");
      setMembershipStartDate(member.membership_start_date || new Date());
      setMembershipExpirationDate(member.membership_expiration_date || new Date());
    }
  }, [member]);
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
  const [disabledButton, setDisabledButton] = useState<boolean>(true);


  const { onOpenChange } = useDisclosureStore();
  const [newMember, setNewMember] = useState<MemberToSend>({
    id: props.id.toString(),
    name:'',
    lastname: '',
    id_card: '',
    email: '',
    dateOfBirth: new Date(),
    phone: '',
    address: '',
    genre: '',
    membershipTime: '',
    membership: '',
    avatar: '',
    status: '',
    membershipId: 0,
  });
  const [genre, setGenre] = React.useState<string>();
  const [membershipTime, setMembershipTime] = React.useState<string>("");
  const [membershipId, setMemebershipId] = React.useState<number>(0);
  const { data, setData } = useMemberStore();


  const onClickEditMember = async () => {
    if(!newMember) return;
    console.log(newMember);
    await updateMember(newMember);
    window.location.reload();
    onOpenChange();
    setData([...data, newMember]);
  }


  const [email, setEmail] = React.useState(member?.email || "");
  const [idNumber, setIdNumber] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [membership, setMembership] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState(new Date());
  const [membershipPlan, setMembershipPlan] = React.useState("");
  const [membershipExpirationDate, setMembershipExpirationDate] = React.useState(new Date());
  const [membershipStartDate, setMembershipStartDate] = React.useState(new Date());



  return (
    <>
      <div className="flex-row items-center">
        <p className="text-xl font-bold mb-2">
          {name} {lastname}
        </p>
        <Divider></Divider>
        <p className="text-md mb-2">
          {email}
        </p>
        <p className="text-md  mb-2">
          Cedula: {idNumber}
        </p>
        <Divider></Divider>
        <p className="text-md  mb-2">
          Plan: {membership}
        </p>
        <p className="text-md mb-2">
          Tiempo: {membershipTime.toLowerCase()}
        </p>
        <Divider></Divider>
        <p className="text-md m-2">
          Su membresia vence el: {membershipExpirationDate.toString().split("T")[0]}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Button color="primary" className="mr-4" onPress={onClickEditMember} isDisabled={disabledButton} type="submit">
          Guardar
        </Button>
        <Button color="danger" onPress={onOpenChange}>
          Cancelar
        </Button>
      </div>

    </>
  );
}