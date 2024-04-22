import { create } from "zustand";

const to_doStore = create((set) => ({
    to_dos: [],
    addToDo: (to_do) => {
        set((state) => ({ to_dos: [...state.to_dos, to_do] }))
    },
    deleteToDo: (_id) => {
        set(state => ({ to_dos: state.to_dos.filter(t => t._id !== _id) }))
    },
    setTodos: (to_dos) => {
        set(state => ({ to_dos: [...to_dos] }))
    },
    clearTodos: () => {
        set(() => ({ to_dos: [] }))
    },
    updateCompleted: (_id, updatedStatus) => {
        set(state => ({ to_dos: state.to_dos.map(td => td._id === _id ? { ...td, completed: updatedStatus } : td) }))
    }
}))


export default to_doStore