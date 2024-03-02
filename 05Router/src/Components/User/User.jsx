import { useParams } from "react-router-dom"


function User() {
    const {userid} = useParams()
  return (
    <div>
        <h1 className="text-center"> User :{userid}</h1>
     
    </div>
  )
}

export default User
