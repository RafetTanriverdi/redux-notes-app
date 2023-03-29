import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';





function List() {

  const list = useSelector((state)=>state.notes);


console.log(list);
  return (
    <div>
      {
        list.map((item) =>
          <h5 style={{ color: `${item.color}` }} >{item.note}</h5>
        )
      }
    </div>
  )
}

export default List