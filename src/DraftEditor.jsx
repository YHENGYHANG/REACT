import { useState, useEffect, useRef } from "react";

function DraftEditor() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  // TODO 1: focus input on mount only
  useEffect(() => {
    inputRef.current.focus();
  }, []); // empty array = runs once, on mount only

  // TODO 2: log every time text changes
  useEffect(() => {
    console.log("Draft saved: " + text);
  }, [text]); // runs whenever "text" changes

  // TODO 3: increment renderCount directly in the component body
  renderCount.current += 1;

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* TODO 4: display renderCount.current below */}
      <p>Render count: {renderCount.current}</p>
    </div>
  );
}

export default DraftEditor;
