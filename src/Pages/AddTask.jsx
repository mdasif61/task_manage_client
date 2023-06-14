import { useForm } from "react-hook-form";
import Container from "../Layout/Container";

const AddTask = () => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div>
            <Container>
                <h1 className="text-center font-bold text-blue-400 text-3xl pb-2 border-b border-blue-400">Add A Task</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                        <div className="w-full">
                            <label htmlFor="title"><span className="font-bold">Title</span></label><br />
                            <input className="w-full h-12 focus:outline-none focus:border-b-2 border-blue-400 border py-2 px-4 mt-2" type="text" {...register('title')} placeholder="Enter Title" id="" />
                        </div>

                        <div className="w-full">
                            <label htmlFor="title"><span className="font-bold">Description</span></label><br />
                            <input className="w-full h-12 focus:outline-none focus:border-b-2 border-blue-400 border py-2 px-4 mt-2" type="text" {...register('desc')} placeholder="Enter Title" id="" />
                        </div>
                    </div>
                    <input className="btn bg-blue-800 text-white hover:bg-blue-700 btn-block" type="submit" value="Add Task" />
                </form>

            </Container>
        </div>
    );
};

export default AddTask;