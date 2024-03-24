import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

export function ThreadContents() {
  
  const [threadContent, setContent] = useState({})
  const { threadId } = useParams()
  
  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`)
     .then(res => res.json())
     .then((content) => {
      setContent(content)
    })
  }, [])

  console.log(threadContent)

    if (!threadContent) {
      return <></>;
    }

  // const ContentList = threadContent.map((threadContent) => {
  //   return(
  //     <ul>
  //       <li>{threadContent.posts} </li>
  //     </ul>
  //   )
  // })

    return (
      <>
        <h3>スレッド</h3> 
        {/* {ContentList} */}
      </>
    );
  }
  
  export default ThreadContents;
  