import {useState} from "react"
import {useParams} from "react-router-dom"
// import {ThreadContents} from "./content"

export function ThreadComment() {
  
  const [post, setPost] = useState("")
  const { threadId } = useParams()

  
  const handleClick = async() => {
    try{
    const res = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({post: post}),
      })
      
      const result = await res.json()
      console.log("投稿しました:", result)
    } catch(error) {
        console.error("投稿できません:", error)
    }
      setPost("")
    }


    return (
      <>
        <h3>コメントする</h3>
        <p>
          <input type="text" className="NewInput" value={post} onChange={e => setPost(e.target.value)} />
          <button className="NewButton" onClick={handleClick}>投稿</button>
        </p>
      </>
    )
  }
  
  export default ThreadComment;  