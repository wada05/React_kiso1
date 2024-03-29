import {useState} from "react"

export function NewThread() {
   
    const [title, setTitle] = useState("")


    const handleClick = async() => {
      const res = await fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title}),
      })

      const result =await res.json()
      console.log(result)
      setTitle("")
    }


    return (
      <div className="div">
        <h3 className="NewTitle">スレッド新規作成</h3>
        <p>
          <input type="text" className="NewInput" value={title} onChange={e => setTitle(e.target.value)} />
          <button className="NewButton" onClick={handleClick}>作成</button>
        </p>
      </div>
    )
  }
  
  export default  NewThread