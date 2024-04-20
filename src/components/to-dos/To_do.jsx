import to_doStore from "../../store/to_doStore";

function To_do({ t }) {
    const { id, title } = t
    const deleteToDo = to_doStore((state) => state.deleteToDo)
    const deleteHandler = (id) => {
        deleteToDo(id)
    }
    return (
        <li className="flex justify-between my-2">
            <p>{title}</p>
            <div>
                <button onClick={() => deleteHandler(id)} className="mx-1 p-1 rounded bg-red-600">Delete</button>
            </div>
        </li>
    );
}

export default To_do