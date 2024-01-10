import { Marked } from 'marked'
import React, { useState } from 'react'
import Markdown from 'react-markdown'
import { FaExpandArrowsAlt } from "react-icons/fa";
import { BiCollapse } from "react-icons/bi";

function MarkComponent() {
    const [value, setValue] = useState(null)
    const [preview, setPreview] = useState(false)
    const [editor, setEditor] = useState(false)
  return (
    <div className='container'>
      <div className={editor ?'toggle-preview' :'editor-container shadow'}>
        <div className='header-container' >
          <span className='header-text' >Editor</span>
          <span onClick={()=>setPreview(prev=> !prev)} >
          {preview ?<BiCollapse/> :<FaExpandArrowsAlt/>}
          </span>
        </div>
        <textarea id='editor' className={preview ?'toggle-height':''} onChange={(e)=>setValue(e.target.value)}>
        </textarea>
      </div>
      <div className={preview ?'toggle-preview' :'preview-container shadow'} >
      <div className='header-container' >
          <span className='header-text' >Editor</span>
          <span onClick={()=>setEditor(prev=>!prev)}>
            {editor ? <BiCollapse/>:<FaExpandArrowsAlt/>}
            </span>
        </div>
        <div id='preview'>
            <Markdown >
            { value}
            </Markdown>
        </div>
      </div>
    </div>
  )
}

export default MarkComponent  