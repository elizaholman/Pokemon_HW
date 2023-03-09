import React from 'react'

const Type = ({name, getTypeData, url}) => {

  const handleClick = function() {
    getTypeData(url)
  }

  return (
    <div>
      <li className='type-item' onClick={handleClick}>
        <a className='type-link'>{name}</a>
      </li>
    </div>
  )
}

export default Type
