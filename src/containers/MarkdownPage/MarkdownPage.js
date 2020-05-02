import React from 'react'
import Editor from '../../components/Editor'

const MarkdownPage = () => {
  return (
    <div>
      <h1>I am the Markdown Page</h1>
      <Editor />
      <div id="preview">
      </div>
    </div>
  )
}

export default MarkdownPage;