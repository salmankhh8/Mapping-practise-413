import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
//1 cfeate a sepersate entry component and need some props
// 2 create props to repalce hard componet
// import the emogi pedia const
// 3 map thruofgh emoji pedia array rendering

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.description}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
