import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'
import { TrainerData } from "@/interfaces/trainer";

export async function GET(){
  const trainers= await prisma.trainer.findMany(
    {
      where: {
        deletedAt: null
      }
    }
  );
  return NextResponse.json(trainers);
}

export async function POST(request: Request){
  try{
    const requestBody = await request.json();
    const trainerData = requestBody as TrainerData;
    await prisma.trainer.create({
      data: {
        fullName: trainerData.fullName,
        dateOfBirth: new Date(trainerData.dateOfBirth),
        email: trainerData.email,
        phoneNumber: trainerData.phoneNumber,
        address: trainerData.address,
        updatedAt: new Date()
      }
    });
    return NextResponse.json({ message: "Creando entrenador" });
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
