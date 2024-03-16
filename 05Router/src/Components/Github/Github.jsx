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
    <div className='text-center bg-gray-500 text-white py-2 text-3xl  mx-4 px-2'>
      {data.name}
      <div className=" flex flex-row space-x-3">
      <img src={data.avatar_url} alt="git picture" width={300} />
      <ul className=" text-left">
        <li><h1>Github Followers: {data.followers}</h1></li>
        <li><h2>{data.bio}</h2></li>
      </ul>
      
      
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/KoliKalpesh')
  return response.json()
  
}
