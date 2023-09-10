import create from "../lib/create";

export const useCounterStore = create((set) => ({
  count: 0,
  increament: () => set((state) => ({ count: state.count + 1 })),
}));
