import {useState, useRef} from "react"
import {useParams} from "react-router-dom"

export function ThreadComment() {
  
  const [posts, setComment] = useState("")
  const { threadId } = useParams()
  const ref = useRef()

  
  const handleRef = async() => {
    try{
    const res = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({post: posts}),
      })
      
      const result = await res.json()
      console.log("投稿しました:", result)
    } catch(error) {
        console.error("投稿できません:", error)
    }
      setComment("")
    }


    return (
      <>
        <h3>コメント</h3>
        <p>
          <input type="text" className="NewInput" value={posts} ref={ref} onChange={e => setComment(e.target.value)} />
          <button className="NewButton" onClick={handleRef}>投稿</button>
        </p>
      </>
    )
  }
  
  export default ThreadComment;  