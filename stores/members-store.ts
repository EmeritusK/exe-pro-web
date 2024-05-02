import {create} from 'zustand';

interface MembersState {
  data: any[];
  setData: (newData: any[]) => void;
}

export const useMemberStore = create<MembersState>((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
}));
