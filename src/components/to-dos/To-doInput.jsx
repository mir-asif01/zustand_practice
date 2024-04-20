import to_doStore from "../../store/to_doStore";

function To_doInput() {
    const addToDo = to_doStore((state) => state.addToDo)
    const handleInput = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        // const description = e.target.description.value
        const t = {
            id: Math.ceil(Math.random() * 100),
            title,
            // description
        }
        addToDo(t)
        e.target.reset()
    }

    return (
        <div >

            <form onSubmit={handleInput} className="flex flex-col justify-between gap-1">
                <input type="text" name="title" className="outline-none px-2 py-1 border border-pink-500" placeholder="title" />
                {/* <input type="text" name="description" className="outline-none px-2 py-1 border border-pink-500" placeholder="description" /> */}
                <button type="submit" className="bg-pink-500 px-1 py-1 text-white">Add</button>
            </form>
        </div>
    );
}

export default To_doInput;