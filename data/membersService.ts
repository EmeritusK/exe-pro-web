'use server';

import { createClient } from "@/utils/supabase/server";



export async function getUserData(){
  const supabase = createClient();
  const user = (await supabase.auth.getUser()).data.user?.app_metadata;
  console.log(user);
  return user;
}

export async function getMember(id:number){
  const supabase = createClient();
  const { data, error } = await supabase.from('members').select(`*,memberships!inner(name)`).eq('id', id).single();
  const member: Member = {
    id: data.id,
    name: data.fullName,
    status: data.status,
    email: data.email,
    phone: data.phoneNumber,
    membership: data.memberships.name,
    membershipTime: data.membership_plan,
    avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png",
    genre: data.genre,
    id_card: data.id_card,
    membershipId: data.membershipId,
    lastname: data.lastname,
    dateOfBirth: data.dateOfBirth,
    address: data.address,
    membership_start_date: data.membership_start_date,
    membership_expiration_date: data.membership_expiration_date,
  }
  if (error) {
    console.log(error);
    return member;
  }
  return member;
}

export async function updateMember(member:Member){
  const supabase = createClient();
  const { data, error } = await supabase.from('members').update({
    fullName: member.name,
    email: member.email,
    phoneNumber: member.phone,
    membership_plan: member.membershipTime,
    genre: member.genre,
    id_card: member.id_card,
    membershipId: member.membershipId,
    lastname: member.lastname,
    dateOfBirth: member.dateOfBirth,
    address: member.address,
  }).eq('id', member.id);
  if (error) {
    console.log(error);
    return error;
  }
  return data;
}

export async function getMembers(): Promise<Member[]>{
  const supabase = createClient();
  const { data, error } = await supabase.from('members').select(`*,memberships!inner(name)`);
  if (error) {
    console.log(error);
    return [];
  }
  console.log(data);
  const members: Member[] = data.map((member) => {
    return {
      id: member.id,
      name: member.fullName,
      status: member.status,
      email: member.email,
      phone: member.phoneNumber,
      membership: member.memberships.name,
      membershipTime: member.membership_plan,
      avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png",//Cambair por avatar de cada miembro
      genre: member.genre,
      id_card: member.id_card,
      membershipId: member.membershipId,
      membership_start_date: member.membership_start_date,
      membership_expiration_date: member.membership_expiration_date,
    };
  });
  return members;
}

export async function deleteMember(id:String){
  const supabase = createClient();
  const { data, error } = await supabase.from('members').delete().eq('id', id);
  if (error) {
    console.log(error);
    return error;
  }
  return data;
}

export async function createMember(member:MemberToSend){
  const supabase = createClient();
  const { data, error } = await supabase.from('members').insert([
    { 
      id_card: member.id_card,
      fullName:`${member.name} ${member.lastname}`,
      email: member.email,
      dateOfBirth: member.dateOfBirth,
      phoneNumber: member.phone,
      address: member.address,
      membershipId: member.membershipId,
      genre: member.genre,
      membership_plan: member.membershipTime,
      status: 'activo',
    }
  ]);
  if (error) {
    console.log(error);
    return error;
  }
  return data;
}