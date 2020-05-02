import React, { useContext } from 'react';
import Editor from '../../components/Editor';
import { MarkdownContext } from '../../providers/MarkdownProvider';
import './styles.scss';

const MarkdownPage = () => {
  const { editorContent } = useContext(MarkdownContext);
  return (
    <div>
      <h1>I am the Markdown Page</h1>
      <Editor />
      <div id="preview">
        <p>{editorContent}</p>
      </div>
    </div>
  )
}

export default MarkdownPage;