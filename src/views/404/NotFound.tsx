import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
        <h1 className="font-black text-center text-4xl text-white">
            Pagina no encontrada

        </h1>
        <p className="mt-10 text-center text-white">
            Talvolver a {' '} vez quieras
            <Link className="text-fuchsia-500" to={'/'}></Link>
        </p>
    </>
  )
}

export default NotFound