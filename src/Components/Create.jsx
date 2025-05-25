import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import { Todocontext } from "../Wapper";

const Create = () => {
    const [todo, settodo] = useContext(Todocontext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const submithandler = (data) => {
        console.log(data)
        data.id = nanoid()
        data.iscompleted = false
        console.log(data)
        settodo([...todo, data])
        toast.success("Created todo!!")
        reset();
    }
    return (
        <div className="  h-full w-[45%] py-20 px-4 bg-gray-900   border">
            <h1 className="font-bold mb-5 tracking-tight  text-5xl px-7">Set <span className="text-purple-500 text-6xl font-extrabold tracking-tighter">Reminder </span> for <div>tasks </div></h1>
            <form className="px-6 py-6" onSubmit={handleSubmit(submithandler)}>
                <input
                    {...register('title', { required: 'Title cannot be empty' })}
                    className="mt-9 border-b border-gray-400 text-xl w-full outline-none placeholder-gray-400 font-medium"
                    type="text"
                    placeholder="Add a todo..."
                />
                {errors?.title?.message && (
                    <small className="font-sans text-sm text-red-500 mt-1 block">{errors.title.message}</small>
                )}
                <button
                    type="submit"
                    className="mt-15 text-2xl px-6 py-2 border-2 border-gray-800 rounded hover:bg-gray-800 hover:text-white active:scale-95 transition"
                >
                    Create Todo
                </button>
            </form>

        </div>
    )
}

export default Create