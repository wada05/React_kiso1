import { useEffect, useState} from "react"
import { Link } from "react-router-dom"

 export const FetchThreads =() => { 
    const [thread, setThread] = useState([])
    

    useEffect(() => {
      fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
      .then(response =>  response.json())
      .then((content) => {
      console.log(content)
      setThread(content) 
      })
    }, [])


    if (!thread) {
        return <></>;
      }

     const ThreadLists = thread.map((thread, index) => {
       return ( 
      <Link to ={`/thread/${index}`}>
       <li key={thread.id}>
          {thread.title}</li>     
      </Link>   
      )     
     })

   return(
    <>
      <ul>
        {ThreadLists} 
      </ul>
    </>
   )   
    }