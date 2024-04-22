import To_doInput from "./To-doInput";
import To_do from "./To_do";
import to_doStore from "../../store/to_doStore";
import { useQuery } from '@tanstack/react-query'
function To_dos() {
    const to_dos = to_doStore((state) => state.to_dos)
    const setTodos = to_doStore((state) => state.setTodos)
    const clearTodos = to_doStore((state) => state.clearTodos)
    const { data, error, isLoading } = useQuery({
        queryKey: ['todosData'],
        queryFn: async () => {
            const data = await fetch('http://localhost:4000/todo').then(res => res.json())
            setTodos(data)
            return data
        }
    })
    if (error) {
        return <h1>Error found {error.message}</h1>
    }
    return (
        <div className="md:w-2/3 lg:w-1/3 m-2 md:my-10 md:mx-auto border border-stone-900 p-10 rounded-lg shadow-lg flex flex-col">
            <To_doInput></To_doInput>
            <button onClick={() => {
                clearTodos()
                fetch(`http://localhost:4000/delete-todos`, {
                    method: "DELETE"
                })

            }}
                className="bg-red-600 px-1 py-1 text-white mt-3">Clear All</button>
            {isLoading ? "Loading data........ " : <ul>
                {to_dos.map(t => {
                    return (
                        <To_do key={t._id} t={t}></To_do>
                    )
                })}
            </ul>}
        </div>
    );
}

export default To_dos;