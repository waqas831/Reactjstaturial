import React, { useState } from "react";

const Search = () => {
  const [img, newing] = useState("");
  const InputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    newing(data);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search anything"
        value={img}
        onChange={InputEvent}
      />
    </div>
  );
};
export default Search;
