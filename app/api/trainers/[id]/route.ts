import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/libs/prisma";
import { RequestParams } from "@/interfaces/params";
import { TrainerData } from "@/interfaces/trainer";


export async function GET({ params }: RequestParams) {
  try {
    const trainer = await prisma.trainer.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!trainer)
      return NextResponse.json({ message: "No se encontro el entrenador" }, { status: 404 });

    return NextResponse.json(trainer);
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

export async function PUT(request: Request, { params }: RequestParams) {
  try {
    const requestBody = await request.json();
    const trainerData = requestBody as Partial<TrainerData>; // Para que los campos sean opcionales
    await prisma.trainer.update({
      where: { id: Number(params.id) },
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

