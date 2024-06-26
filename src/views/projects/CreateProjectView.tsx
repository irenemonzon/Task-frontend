import { Link,useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"
import ProjectForm from "@/components/ProjectForm"
import { ProjectFormData } from "@/types/index"
import { createProject } from "@/services/ProjectApi"

const CreateProjectView = () => {

    const navigate=useNavigate()

    const initialvalues:ProjectFormData={
        projectName:"",
        clientName:"",
        description:""
    }

    const { register,handleSubmit,formState:{errors}}=useForm({defaultValues:initialvalues})

    const {mutate}=useMutation({
        mutationFn:createProject,
        onError:(error)=>{
            toast.error(error.message)
        },
        onSuccess:(data)=>{
            toast.success(data)
            navigate('/')
        }

    })

    const handleForm=(formData:ProjectFormData)=>{
         mutate(formData)
      
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