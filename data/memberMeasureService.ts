
'use server';

import { createClient } from "@/utils/supabase/server";


export async function getMeasures(id:number){
  const supabase = createClient();
  const { data, error } = await supabase.from('WeightMeasure').select().eq('memberId', id);
  console.log(data);
  if (error) {
    console.log('error'+error);
    return [];
  }
  const memberMeasures: MemberMeasure[] = data.map((measure: any) => {
    const memberMeasure: MemberMeasure = {
      id: measure.id,
      member_id: measure.member_id,
      weight: measure.weight,
      date: measure.date,
    }
    return memberMeasure;
  });
  if (error) {
    console.log(error);
    return [];
  }
  return memberMeasures;
}

export async function createMeasure(memberMeasure:MemberMeasure){
  const supabase = createClient();
  console.log(memberMeasure);
  const { data, error } = await supabase.from('WeightMeasure').insert({
    memberId: memberMeasure.member_id,
    weight: memberMeasure.weight,
    date:new Date(),
  });
  if (error) {
    console.log(error);
    return error;
  }
  console.log(data);
  return data;
}
