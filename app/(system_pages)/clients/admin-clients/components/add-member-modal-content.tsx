import { Checkbox, Input, Link } from "@nextui-org/react";
import { FaRegUser } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";

export default function AddMemberContent() {
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
      <DatePicker label="Birth date" className="max-w-[284px]" />
      <Input
        endContent={
          <FaRegUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="bordered"
      />
      <div className="flex py-2 px-1 justify-between">
        <Checkbox
          classNames={{
            label: "text-small",
          }}
        >
          Remember me
        </Checkbox>
        <Link color="primary" href="#" size="sm">
          Forgot password?
        </Link>
      </div>
    </>
  );
}