import { create } from "zustand";

interface HookProps {
  isOpen: boolean;
  toggle: () => void;
  onClose: () => void;
  onOpen: () => void;
}

export const useSidebar = create<HookProps>()((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set(() => ({ isOpen: false })),
  onOpen: () => set(() => ({ isOpen: true })),
}));
