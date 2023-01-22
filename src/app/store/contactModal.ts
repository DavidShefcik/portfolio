import { create } from "zustand";

export interface ContactModalStore {
  isModalOpen: boolean;
  email: string;
  setIsModalOpen(value: boolean): void;
  setEmail(value: string): void;
}

export const useContactModalStore = create<ContactModalStore>((set) => ({
  isModalOpen: false,
  email: "",
  setIsModalOpen: (value: boolean) =>
    set(() => ({
      isModalOpen: value,
    })),
  setEmail: (value: string) =>
    set(() => ({
      email: value,
    })),
}));
