import { getMembers } from '@/data/membersService';

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NOMBRE", uid: "name", sortable: true },
  { name: "EDAD", uid: "age", sortable: true },
  { name: "MEMBRESIA", uid: "membership", sortable: true },
  { name: "GENERO", uid: "genre", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "ESTADO", uid: "status", sortable: true },
  { name: "ACCIONES", uid: "actions" },
];

const statusOptions = [
  { name: "Activo", uid: "activo" },
  { name: "En Pausa", uid: "pausado" },
  { name: "Dado de baja", uid: "inactivo" },
];


export { columns, statusOptions };
