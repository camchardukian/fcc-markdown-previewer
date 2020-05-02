import React, { useState } from 'react'

export const MarkdownContext = React.createContext();

const MarkdownProvider = props => {
  const [editorContent, setEditorContent] = useState('I am the default Text');

  const handleSetEditorContent = (value) => {
    setEditorContent(value)
  }

  return (
    <MarkdownContext.Provider
      value={{
        handleSetEditorContent,
        editorContent,
        setEditorContent,
      }}
    >
      {props.children}
    </MarkdownContext.Provider>
  );
};

export default MarkdownProvider;