import './App.css';
import {ThreadLists} from "./threadLists"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { NewThread } from "./thread/new"
import { ThreadContents} from "./thread/content"


export function App() {


  return (
    <div>
       <BrowserRouter>
       <header className="App-header">
         掲示板
         <Link to="/thread/new" className="link">スレッドをたてる</Link>
         <Link to="/" className="link">ホーム</Link>
       </header>
       <main className="main">
         <Routes>
           <Route path="/" element={<ThreadLists />} />
           <Route path="/thread/new" element={<NewThread />} />
           <Route path="/thread/:threadId" element={<ThreadContents />} />
         </Routes>
        </main> 
       </BrowserRouter>
    </div>
  );
}

export default App;
