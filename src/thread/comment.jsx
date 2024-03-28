import {useState, useRef} from "react"
import {useParams} from "react-router-dom"

export function ThreadComment() {
  
  const [posts, setComment] = useState("")
  const { threadId } = useParams()
  const ref = useRef()

  
  const handleRef = async() => {
    const res = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({posts}),
      })
      const result = await res.json()
      console.log(result)
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