import { toast } from "react-toastify";
import { Todocontext } from "../Wapper";
import { useContext } from "react";

const Read = () => {
    const [todos, settodo] = useContext(Todocontext);

    const Deletetodo = (id) => {
        settodo(todos.filter((todo) => todo.id !== id));
        toast.error("Todo deleted!");
    };

    const rendering = todos.map((todo) => (
        <div
            key={todo.id}
            className="flex mb-2 p-2 rounded justify-between w-full text-xl bg-gray-950"
        >
            <li className="text-blue-400 font-serif font-bold list-none">
                {todo.title}
            </li>
            <span
                className="font-mono cursor-pointer text-red-500 font-bold hover:underline"
                onClick={() => Deletetodo(todo.id)}
            >
                Delete
            </span>
        </div>
    ));

    return (
        <div className="h-full w-[55%] bg-gray-00 ">
            <h1 className="w-full  text-white text-3xl px-70 mb-15 pb-8 pt-20 border-b bg-gray-900 border-gray-800 text-center font-lobster flex items-center shadow-md">
                <span className="text-purple-500 font-extrabold font-poppins">Pending</span>&nbsp;Todos
            </h1>


            <div className="h-[500px] bg-slate-900 m-5 p-5 overflow-y-auto px-4 pr-6 space-y-2">
                {rendering.length > 0 ? rendering : (
                    <p className="text-gray-400 text-center font-semibold animate-pulse px-5 py-15 bg-gray-700">No todos found.</p>
                )}
            </div>
        </div>
    );
};

export default Read;
