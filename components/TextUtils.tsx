import React, { useState } from "react";

export default function TextUtils() {
  const [text, setText] = useState(''); // React hook

  // Fu

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString(length: string | number) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const randomlist = () => {
    let randno = generateString(text);
    setText(randno)
  };
  const sorter = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const onchange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(event.target.value);
  };
  return (
    <div className="grid place-items-center mx-16 mt-10  text-center overscroll-y-none">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Alphabetical Sorter
      </label>
      <textarea
        onChange={onchange}
        value={text}
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-cyan-100 dark:border-gray-600 dark:placeholder-gray-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter Array..."
      ></textarea>
      <div className="grid-cols-2 flex">
      <button
        disabled={text.length===0}
        type="button"
        onClick={sorter}
        className="mt-5 mx-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2.5 sm:px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-900"
      >
        CAPITILIZE
      </button>
      <button
        disabled={text.length===0}
        type="button"
        onClick={randomlist}
        className="mt-5 mx-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2.5 sm:px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-900"
      >
        Secure Key
      </button>
      </div>
      <div className="preview_container border-gray-300 py-2 px-5 border-double rounded-2xl border-4 mt-4">
      <h1 className=" font-bold">Preview</h1>
      <h2>{text.length>0?text:"Text"}</h2>
      <p className="mt-1"> {text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
      </div>
    </div>
  );
}