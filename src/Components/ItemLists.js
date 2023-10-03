import React from 'react'

const ItemLists = (props) => {
    const items = props.list.map((item) => (
        <div  className="item h-8 w-24 border border-gray-500 ">
          {item}
        </div>
      ));
  return (
    <div>
     <div className="item-list flex flex-col justify-center items-center pt-32 ">
     {items}
    </div>
      
    </div>
  )
}

export default ItemLists
