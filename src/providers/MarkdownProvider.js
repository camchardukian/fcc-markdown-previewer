import React, { useState } from 'react'

export const MarkdownContext = React.createContext();

const MarkdownProvider = props => {
  const [editorContent, setEditorContent] = useState(` # Welcome to My Page
  ## The Page that Belongs to Me
  Here's a link to [my Github](https://github.com/camchardukian).
What's my name?

  \`const myName = Cameron\`

  The **only** thing on my mind at this moment is cleaning up the code
  for this project and pushing it to GitHub!

  Three things motivating me are:
  * The desire to become better.
  * Being able to better take care of my family.
  * Having more opportunities to travel while working remotely.
  
Wow, just a couple years ago I thought something as simple as a *for loop* was incredibly difficult
\`\`\`
for (let i = 0; i < 10; i+=1) {
  console.log('i is growing', i)
}
\`\`\`
Well, you shouldn't believe people when they say
> Learning to code is as easy as 1, 2, 3!

Anyway, before I go... here's an image from my 2019 trip to Los Angeles:
![Beach Los Angeles](https://cameronchardukian.com/wp-content/uploads/2020/01/IMG_0677-1024x768.jpg "Santa Monica Beach")

    `);

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