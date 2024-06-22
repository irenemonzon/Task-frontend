import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import ProjectForm from "@/components/ProjectForm"

const CreateProjectView = () => {

    const initialvalues={
        projectName:"",
        clientName:"",
        description:""
    }

    const { register,handleSubmit,formState:{errors}}=useForm({defaultValues:initialvalues})

    const handleForm=(data)=>{
        console.log(data)
    }

  return (
    <>
        <div className="max-w-3xl mx-auto">

            <h1 className=" text-5xl font-black">Crear proyectos</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para crear proyecto</p>
            <nav className="my-5">

            <Link className="bg-purple-400 hover:bg-purple-500 px-10 py-3 font-bold cursor-pointer  text-white text-xl transition-colors"
            to='/'
            >
                Volver a Proyectos
            </Link>
            </nav>
            <form
            className="mt-10 bg-white shadow-lg rounded-lg p-10"
            onSubmit={handleSubmit(handleForm)}
            noValidate
            >
                <ProjectForm 
                    register={register}
                    errors={errors}
                />
                <input
                type="submit"
                value="Crear proyecto"
                className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors "
                />

            </form>
        </div>
   </>
  )
}

export default CreateProjectView