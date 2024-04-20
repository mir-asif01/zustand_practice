import To_doInput from "./To-doInput";
import To_do from "./To_do";
import to_doStore from "../../store/to_doStore";


function To_dos() {
    const to_dos = to_doStore((state) => state.to_dos)
    return (
        <div className="w-[300px] my-10 mx-auto border border-stone-900 p-10 rounded-lg shadow-lg">
            <To_doInput></To_doInput>
            <ul>
                {to_dos.map(t => {
                    return (
                        <To_do key={t.id} t={t}></To_do>
                    )
                })}
            </ul>
        </div>
    );
}

export default To_dos;