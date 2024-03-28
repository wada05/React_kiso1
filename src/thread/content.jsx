import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {ThreadComment} from "./comment"

export function ThreadContents() {
  
  const [comments, setContent] = useState([])
  const { threadId } = useParams()

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`)
    .then(response =>  response.json())
    .then((thread) => {
    setContent(thread.posts) 
    console.log(thread.posts)
    })
  }, [threadId])

    if (!comments) {
      return <></>;
    }

    const ContentLists = comments.map((comment) => {
      return ( 
      <li key={comment.id}>
         {comment.posts}</li>     
     )     
    })

    return (
      <>
        <ThreadComment />
        <h3>スレッド</h3> 
        <ul>
        {ContentLists}
        </ul>
      </>
    )
  }
  
  export default ThreadContents;  