import React from 'react'

const FileRendering = (props) => {
  const { setup, punchline } = props.item;
  return (
    <div className=" w-full h-48  flex flex-row bg-green-300 ">
      <div className=" m-4 p-24 bg-gray-200">
        <h2>{setup}</h2>
        <p>{punchline}</p>
      </div>
    </div>
  );
  
}

export default FileRendering
