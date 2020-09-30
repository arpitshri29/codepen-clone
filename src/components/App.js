import React from 'react';
import Editor from "./Editor";

function App() {
  return (
    <>
        <div className="panel top-panel">
            <Editor/>
            <Editor/>
            <Editor/>
        </div>
        <div className="panel bottom-panel">
            <iframe
                title="output"
                sandbox="allow-scripts"
                src=""
                frameborder="0"
                width="100%"
                height="100%"
            />
        </div>
      
    </>
  );
}

export default App;
