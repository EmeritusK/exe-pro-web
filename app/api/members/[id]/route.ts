import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { TrainerData } from "@/interfaces/trainer";

export interface Params {
  params: { id: string };
}

export async function GET(_request: NextRequest, { params }: Params) {
  console.log(params.id);
  try {
    const member = await prisma.member.findFirst({
      
      where: {
        id: Number(params.id),
        deletedAt: null,
      },
    });

    if (!member)
      return NextResponse.json({ message: "No se encontro el miembro" }, { status: 404 });

    return NextResponse.json(member);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const requestBody = await request.json();
    const trainerData = requestBody as Partial<TrainerData>; // Para que los campos sean opcionales
    await prisma.trainer.update({
      where: { id: Number(params.id) },
      data: {
        ...trainerData, 
        updatedAt: new Date() 
      }
    });
    return NextResponse.json({ message: "Entrenador actualizado" });
  } catch (error) {
    if(error instanceof Error){
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  try { // Para que los campos sean opcionales
    await prisma.trainer.update({
      where: { id: Number(params.id) },
      data: {
        deletedAt: new Date(),
        updatedAt: new Date() 
      }
    });
    return NextResponse.json({ message: "Entrenador borrado" });
  } catch (error) {
    if(error instanceof Error){
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

