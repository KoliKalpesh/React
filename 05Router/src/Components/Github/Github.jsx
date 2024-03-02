import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {
  const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/KoliKalpesh').then((response)=>response.json())
    //     .then((data)=>{
    //         setData(data)
    //     }
    //    )
    // },[])

  return (
    <div className='text-center bg-gray-500 text-white py-4 text-3xl  mx-4 px-2'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/KoliKalpesh')
  return response.json()
  
}
