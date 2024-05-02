'use client';
import { getMemberships } from "@/data/getMemberships";
import { createMember } from "@/data/membersService";
import { useMemberStore } from "@/stores/members-store";
import { useDisclosureStore } from "@/stores/modal-add-member-store";
import { Button, Checkbox, DatePicker, Input, Link, Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { useEffect, useState } from "react";
import { FaAddressCard, FaClipboardUser } from "react-icons/fa6";
import { IoMail, IoPhonePortraitOutline } from "react-icons/io5";
import { MdGpsFixed, MdOutlinePhoneAndroid } from "react-icons/md";

export default function AddMemberContent() {

  const [plans, setPlans] = useState<Membership[]>([]);


  useEffect(() => {
    fetchMembershipsData();
  }, []);

  async function fetchMembershipsData() {
    const data = await getMemberships();
    //console.log(data);
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
  const [disabledButton, setDisabledButton] = useState<boolean>(true);


  const { onOpenChange } = useDisclosureStore();
  const [newMember, setNewMember] = useState<MemberToSend>({
    id: '',
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
  const [genre, setGenre] = React.useState<string>("");
  const [membershipTime, setMembershipTime] = React.useState<string>("");
  const [membershipId, setMemebershipId] = React.useState<number>(0);
  const { data, setData } = useMemberStore();


  const onClickAddMember = async () => {
    if(!newMember) return;
    await createMember(newMember);
    //onOpenChange();
    //setData([...data, newMember]);
  }

  const handleGenreSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = e.target.value;
    setGenre(selectedGenre);
    setNewMember({ ...newMember, genre: selectedGenre });
  };
  
  const handleMembershipTimeSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMembershipTime = e.target.value;
    setMembershipTime(selectedMembershipTime);
    setNewMember({ ...newMember, membershipTime: selectedMembershipTime });
  };
  
  const handleMemershipSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMembershipId = parseInt(e.target.value);
    setMemebershipId(selectedMembershipId);
    setNewMember({ ...newMember, membershipId: selectedMembershipId });
  };

  const [email, setEmail] = React.useState("");
  const [idNumber, setIdNumber] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  const validateEmail = (value: any) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const validateIdNumber = (value: any) => value.match(/^[0-9]{10}$/i);
  const validateName = (value: any) => value.match(/^[a-zA-Z\s]*$/i);
  const validateLastName = (value: any) => value.match(/^[a-zA-Z\s]*$/i);
  const validatePhone = (value: any) => value.match(/^[0-9]{10}$/i);
  const validateAddress = (value: any) => value.match(/^[a-zA-Z\s]*$/i);



  const isEmailInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const isIdNumberInvalid = React.useMemo(() => {
    if (idNumber === "") return false;
    return validateIdNumber(idNumber) ? false : true;
  }, [idNumber]);

  const isNameInvalid = React.useMemo(() => {
    if (name === "") return false;
    return validateName(name) ? false : true;
  }, [name]);

  const isLastNameInvalid = React.useMemo(() => {
    if (lastname === "") return false;
    return validateLastName(lastname) ? false : true;
  }, [lastname]);

  const isPhoneInvalid = React.useMemo(() => {
    if (phone === "") return false;
    return validatePhone(phone) ? false : true;
  }, [phone]);

  const isAddressInvalid = React.useMemo(() => {
    if (address === "") return false;
    return validateAddress(address) ? false : true;
  }, [address]);

  useEffect(() => {
    const isValidForm =
      !isNameInvalid &&
      !isLastNameInvalid &&
      !isIdNumberInvalid &&
      !isEmailInvalid &&
      !isPhoneInvalid &&
      !isAddressInvalid &&
      genre !== "" &&
      membershipTime !== "" &&
      membershipId !== 0;
  
    setDisabledButton(!isValidForm);
  }, [isNameInvalid, isLastNameInvalid, isIdNumberInvalid, isEmailInvalid, isPhoneInvalid, isAddressInvalid, genre, membershipTime, membershipId]);




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
          isInvalid={isNameInvalid}
          color={isNameInvalid ? "danger" : "default"}
          errorMessage={isNameInvalid && "Ingrese un nombre valido"}
          onValueChange={setName}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}

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
          isInvalid={isLastNameInvalid}
          color={isLastNameInvalid ? "danger" : "default"}
          errorMessage={isLastNameInvalid && "Ingrese un apellido valido"}
          onValueChange={setLastName}
          onChange={(e) => setNewMember({ ...newMember, lastname: e.target.value })}
        />
      </div>
      <Input
        autoFocus
        endContent={
          <FaAddressCard className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Cedula"
        placeholder="Escriba su cedula"
        variant="bordered"
        isInvalid={isIdNumberInvalid}
        color={isIdNumberInvalid ? "danger" : "default"}
        errorMessage={isIdNumberInvalid && "Ingrese una cedula valida"}
        onValueChange={setIdNumber}
        onChange={(e) => setNewMember({ ...newMember, id_card: e.target.value })}
      />
      <Input
        autoFocus
        endContent={
          <IoMail className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Email"
        placeholder="Escriba su email"
        variant="bordered"
        type="email"
        isInvalid={isEmailInvalid}
        color={isEmailInvalid ? "danger" : "default"}
        errorMessage={isEmailInvalid && "Ingrese un email valido"}
        onValueChange={setEmail}
        onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
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
        isInvalid={isPhoneInvalid}
        color={isPhoneInvalid ? "danger" :  "default"}
        errorMessage={isPhoneInvalid && "Ingrese un numero de telefono valido"}
        onValueChange={setPhone}
        onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
      />
      <Input
        autoFocus
        endContent={
          <MdGpsFixed className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Direccion"
        placeholder="Escriba su direccion"
        variant="bordered"
        isInvalid={isAddressInvalid}
        color={isAddressInvalid ? "danger" :  "default"}
        errorMessage={isAddressInvalid && "Ingrese una direccion valida"}
        onValueChange={setAddress}
        onChange={(e) => setNewMember({ ...newMember, address: e.target.value })}
      />
      <div className="flex items-center">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mr-2">
          <Select
            label="Genero"
            variant="bordered"
            onChange={(e)=>handleGenreSelectionChange(e)}
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
            onChange={(e)=>handleMembershipTimeSelectionChange(e)}
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
            onChange={(e)=>handleMemershipSelectionChange(e)}
          >
            {plans.map((plan) => (
              <SelectItem key={plan.id} value={plan.id}>
                {plan.name + ` ( $ ${plan.price} )`}
              </SelectItem>
            ))}
          </Select>
        </div>
      <div className="flex items-center justify-center">
        <Button color="primary" className="mr-4" onPress={onClickAddMember} isDisabled={disabledButton}>
          Guardar
        </Button>
        <Button color="danger" onPress={onOpenChange}>
          Cancelar
        </Button>
      </div>

    </>
  );
}