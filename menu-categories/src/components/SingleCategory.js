import React from 'react'

const SingleCategory = ({category,filterItem}) => {
    return (
        <button
        type="button"
        className="filter-btn"
        onClick={() => filterItem(category)}
      >
        {category}
      </button>
    )
}

export default SingleCategory
