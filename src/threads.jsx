import { useEffect, useState} from "react"
import { Link } from "react-router-dom"

 export const FetchThreads =() => { 
    const [threads, setThreads] = useState([])
    

    useEffect(() => {
      fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
      .then(response =>  response.json())
      .then((content) => {
      console.log(content)
      setThreads(content) 
      })
    }, [])


    if (!threads) {
        return <></>;
      }

     const ThreadLists = threads.map((thread) => {
       return ( 
       <li key={thread.id}>
          <Link to ={`/thread/${thread.id}`}>{thread.title}</Link></li>     
        
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