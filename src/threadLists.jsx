import {FetchThreads} from "./threads"

export function ThreadLists() {
    return (
      <>
        <h3>新着スレッド</h3>
        <FetchThreads />
      </>
    );
  }
  
  export default ThreadLists;
  