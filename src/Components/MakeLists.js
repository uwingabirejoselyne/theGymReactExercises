import React from 'react'

const MakeLists = () => {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse', 'hen'];
  return (
    <div>
      <ul>
      {animals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  )
}

export default MakeLists

