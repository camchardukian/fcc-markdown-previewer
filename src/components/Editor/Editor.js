import React, { useContext } from 'react'
import { MarkdownContext } from '../../providers/MarkdownProvider';
import './styles.scss';
const Editor = () => {
  const { editorContent, handleSetEditorContent } = useContext(MarkdownContext);
  return (
    <div>
      <textarea id="editor" value={editorContent} onChange={(event) => handleSetEditorContent(event.target.value)}>
      </textarea>
    </div>
  )
}

export default Editor;