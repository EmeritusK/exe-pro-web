import { create } from 'zustand';

interface DisclosureState {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}

export const useDisclosureStore = create<DisclosureState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onOpenChange: () => set({ isOpen: false }),
}));
