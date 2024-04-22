'use server';

import { createClient } from "@/utils/supabase/server";

export async function getClient(id:String){
  console.log('entro a la funcion getClient');
  const supabase = createClient();
  const { data, error } = await supabase.from('members').select('*').eq('id', id).single();
  if (error) {
    console.log(error);
    return error;
  }
  console.log(data);
  return data;
}