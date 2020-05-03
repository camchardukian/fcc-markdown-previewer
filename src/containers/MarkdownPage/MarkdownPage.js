import React, { useContext } from 'react';
import Editor from '../../components/Editor';
import { MarkdownContext } from '../../providers/MarkdownProvider';
import './styles.scss';
import marked from 'marked';
import DOMPurify from 'dompurify';

marked.setOptions({
  gfm: true,
  breaks: true
})

const MarkdownPage = () => {
  const { editorContent } = useContext(MarkdownContext);
  const sanitizedHTML = DOMPurify.sanitize(marked(editorContent));
  return (
    <div>
      <h1>I am the Markdown Editor</h1>
      <Editor />
      <div id="preview"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sanitizedHTML) }}>
      </div>
    </div >
  )
}

export default MarkdownPage;