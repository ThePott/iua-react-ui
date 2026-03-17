import { create } from "zustand"
import type { GlobalStoreState } from "./globalStoreState"

const useGlobalStore = create<GlobalStoreState>()((set) => ({
    isBodyScrollable: true,
    setIsBodyScrollable: (isBodyScrollable) => set({ isBodyScrollable }),
}))

export default useGlobalStore
