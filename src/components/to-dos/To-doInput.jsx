import { useState } from "react";
import to_doStore from "../../store/to_doStore";
import { useMutation } from "@tanstack/react-query";

function To_doInput() {
    const addToDo = to_doStore((state) => state.addToDo)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const completed = false
    const newTodo = {
        title,
        description,
        completed
    }
    const { mutate, isPending, isError, error, isSuccess } = useMutation(
        {
            mutationFn: async (newTodo) =>
                await fetch(`http://localhost:4000/todo`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newTodo)
                }).then(res => res.json())
        }
    )

    const hadleAddNewTodo = () => {
        mutate(newTodo)
        addToDo(newTodo)
    }
    if (isPending) {
        return <h1>Adding new todo.........</h1>
    }
    if (isError) {
        console.log(error);
    }

    return (
        <div >
            <div className="flex flex-col justify-between gap-1" >
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" className="outline-none px-2 py-1 border border-pink-500" placeholder="title" />
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" className="outline-none px-2 py-1 border border-pink-500" placeholder="description" />
                <button onClick={() => hadleAddNewTodo()} className="bg-pink-500 px-1 py-1 text-white">Add</button>
            </div>


        </div>
    );
}

export default To_doInput;