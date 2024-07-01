import { create } from "zustand";

type ContactState = {
  name: string;
  description: string;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
};

export const useContact = create<ContactState>((set) => ({
  name: "",
  description: "",
  setName: (name: string) => set({ name }),
  setDescription: (description: string) => set({ description }),
}));
