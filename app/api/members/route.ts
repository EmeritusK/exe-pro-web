import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'
import { MemberData } from "@/interfaces/member";
import { TrainerData } from "@/interfaces/trainer";

export async function GET(){
  const members= await prisma.member.findMany(
    {
      where: {
        deletedAt: null
      }
    }
  );
  return NextResponse.json(members);
}

export async function POST(request: Request){
  try{
    const requestBody = await request.json();
    const memberData = requestBody as MemberData;
    return NextResponse.json({ message: "Miembro creado" });
  }catch(error){
    if(error instanceof Error){
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }

  

}

export async function PUT(request: Request) {
  try {
    const requestBody = await request.json();
    const trainerData = requestBody as Partial<TrainerData>; // Para que los campos sean opcionales
    await prisma.trainer.update({
      where: { id: parseInt(requestBody.id) },
      data: {
        ...trainerData, // Se mezclan los datos
        updatedAt: new Date() // Actualizamos la fecha de actualización
      }
    });
    return NextResponse.json({ message: "Entrenador actualizado" });
  } catch (error) {
    if(error instanceof Error){
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(request: Request) {
  try {
    const requestBody = await request.json();
    await prisma.trainer.update({
      where: { id: parseInt(requestBody.id) },
      data: {
        updatedAt: new Date(), // Actualizamos la fecha de actualización
        deletedAt: new Date() // Actualizamos la fecha de eliminación
      }
    });
    return NextResponse.json({ message: "Entrenador borrado" });
  } catch (error) {
    if(error instanceof Error){
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
