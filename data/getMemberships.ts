'use server';
import { createClient } from "@/utils/supabase/server";

export async function getMembership(id:String){
  const supabase = createClient();
  const { data, error } = await supabase.from('membership').select(`*`).eq('id', id).single();
  const member: Membership = {
    id: data.id,
    name: data.name,
    description: data.description,
    price: data.price,
    benefits: data.benefits,
  }
  if (error) {
    console.log(error);
    return error;
  }
  console.log(member);
  return member;
}

export async function createMembership(membership:Membership){
  const supabase = createClient();
  const { data, error } = await supabase.from('memberships').insert([
    {
      name: membership.name,
      description: membership.description,
      price: membership.price,
      benefits: membership.benefits,
    }
  ]);
  if (error) {
    console.log(error);
    return error;
  }
  console.log(data);
  return data;
}

export async function getMemberships(): Promise<Membership[]>{
  const supabase = createClient();
  const { data, error } = await supabase.from('memberships').select();
  if (error) {
    console.log(error);
    return [];
  }
  const memberships: Membership[] = data.map((membership) => {
    return {
      id: membership.id,
      name: membership.name,
      description: membership.description,
      price: membership.price,
      benefits: membership.benefits,
    };
  });
  return memberships;
}

export async function deleteMembership(id:number){
  const supabase = createClient();
  const { data, error } = await supabase.from('memberships').delete().eq('id', id);
  if (error) {
    console.log(error);
    return error;
  }
  return data;
}