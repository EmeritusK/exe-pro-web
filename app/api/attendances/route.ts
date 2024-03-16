import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

export async function GET(){
  const attendance= await prisma.attendance.findMany();
  return NextResponse.json(attendance);
}

export async function POST(request: Request){
  try{
    const {AttendanceData} = await request.json();
    prisma.attendance.create({
      data: {
        memberId: AttendanceData.memberId,
        classId: AttendanceData.classId,
        date: new Date(),
        entryTime: new Date(),
        exitTime: new Date(),
      }
    });
    return NextResponse.json({ message: "Creating attendance" });
  }catch(error){
    if(error instanceof Error){
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }

}