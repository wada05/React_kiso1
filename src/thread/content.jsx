import {useState, useEffect, useRef} from "react"
import {useParams} from "react-router-dom"

export function ThreadContents() {
  
  const [data, setContent] = useState({})
  const [comment, setComment] = useState("")
  const { threadId } = useParams()
  const ref = useRef()

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`)
     .then(res => res.json())
     .then((content) => {
      setContent(content)
    })
  }, [])

  const handleRef = async() => {
    const res = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({comment}),
      })
      const result = await res.json()
    console.log(result)
    }

  console.log(data)

    if (!data.posts) {
      return <></>;
    }

    return (
      <>
        <h3>コメント</h3>
        <p>
          <input type="text" className="NewInput" value={comment} ref={ref} onChange={e => setComment(e.target.value)} />
          <button className="NewButton" onClick={handleRef}>投稿</button>
        </p>
        <h3>スレッド</h3> 
        <ul>
        {data.posts.map((post) => {
        <li key={post.id}> {post} </li> })}
        </ul>
      </>
    )
  }
  
  export default ThreadContents;  