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
    }
}))


export default to_doStore