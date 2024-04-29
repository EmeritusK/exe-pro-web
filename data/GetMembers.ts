'use server';

import { createClient } from "@/utils/supabase/server";

export async function getMember(id:String){
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
    avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"
  }
  if (error) {
    console.log(error);
    return error;
  }
  console.log(member);
  return member;
}

export async function getMembers(): Promise<Member[]>{
  const supabase = createClient();
  const { data, error } = await supabase.from('members').select(`*,memberships!inner(name)`);
  if (error) {
    console.log(error);
    return [];
  }
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
      genre: member.genre
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