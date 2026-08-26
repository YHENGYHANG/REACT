import { useState, useEffect, useRef } from "react";

function App() {
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

export default App;

// TODO explanation:
// The renderCount number on the screen doesn't update live while typing
// because changing a ref (renderCount.current) does NOT trigger a re-render.
// The value is increasing correctly every render, but React only redraws
// the screen when state changes. So the displayed number is always one
// render "behind" — it only shows the latest value the next time the
// component re-renders for some OTHER reason (like text changing via
// useState), not because the ref itself changed.