'use server';

import { createClient } from "@/utils/supabase/server";

export async function getTrainer(id:String){
  const supabase = createClient();
  const { data, error } = await supabase.from('trainers').select('*').eq('id', id).single();
  if (error) {
    console.log(error);
    return error;
  }
  console.log(data);
  return data;
}

export async function getTrainers(){
  const supabase = createClient();
  const { data, error } = await supabase.from('trainers').select('*');
  if (error) {
    console.log(error);
    return error;
  }
  console.log(data);
  return data;
}