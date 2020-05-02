import React, { useContext } from 'react'
import { MarkdownContext } from '../../providers/MarkdownProvider';

const Editor = () => {
  console.log('hoooo', MarkdownContext)
  // const { editorContent, handleSetEditorContent } = useContext(MarkdownContext);
  return (
    <div>
      <h1>I am the Editor</h1>
      {/* <textarea id="editor" value={editorContent} onChange={(event) => handleSetEditorContent(event.target.value)}>
      </textarea> */}
    </div>
  )
}

export default Editor;