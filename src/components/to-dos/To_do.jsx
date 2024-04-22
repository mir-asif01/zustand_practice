import to_doStore from "../../store/to_doStore";

function To_do({ t }) {
    const { _id, title, description, } = t
    const deleteToDo = to_doStore((state) => state.deleteToDo)
    const deleteHandler = (_id) => {
        deleteToDo(_id)
        fetch(`http://localhost:4000/todo/${_id}`, {
            method: "DELETE",
        })

    }
    const handleComplete = (_id) => {

    }
    return (
        <li key={_id} className="flex justify-between items-center my-2">
            <div className="flex flex-col text-left">
                <p className="text-left font-semibold text-lg">{title.length > 7 ? title.slice(0, 7) + "...." : title}</p>
                <p>{description.length > 20 ? description.slice(0, 16) + "...." : description}</p>
            </div>
            <div>
                <button onClick={() => deleteHandler(_id)} className="text-white mx-1 p-1 rounded bg-red-600">Delete</button>
                <button onClick={() => handleComplete(_id)} className="mx-1 p-1 rounded text-white bg-green-600">Completed</button>
            </div>
        </li>
    );
}

export default To_do