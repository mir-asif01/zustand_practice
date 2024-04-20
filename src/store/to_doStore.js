import { create } from "zustand";

const to_doStore = create((set) => ({
    to_dos: [],
    addToDo: (to_do) => {
        set((state) => ({ to_dos: [...state.to_dos, to_do] }))
    },
    deleteToDo: (id) => {
        set(state => ({ to_dos: state.to_dos.filter(t => t.id !== id) }))
    }
}))


export default to_doStore