import To_doInput from "./To-doInput";
import To_do from "./To_do";
import to_doStore from "../../store/to_doStore";
import { useQuery } from '@tanstack/react-query'
function To_dos() {
    const to_dos = to_doStore((state) => state.to_dos)
    const setTodos = to_doStore((state) => state.setTodos)
    const { status, data, error } = useQuery({
        queryKey: ['todosData'],
        queryFn: async () => {
            const data = await fetch('http://localhost:4000/todo').then(res => res.json())
            setTodos(data)
            return data
        }
    })
    if (status === "loading") {
        return <h1>Loading data.......</h1>
    }
    if (status === 'error') {
        return <h1>Error found {error.message}</h1>
    }
    return (
        <div className="w-[300px] my-10 mx-auto border border-stone-900 p-10 rounded-lg shadow-lg">
            <To_doInput></To_doInput>
            <ul>
                {to_dos.map(t => {
                    return (
                        <To_do key={t._id} t={t}></To_do>
                    )
                })}
            </ul>
        </div>
    );
}

export default To_dos;