import React from 'react'
import SingleCategory from './SingleCategory';
const Categories = ({filterItem,categories}) => {
    return (
        <div className="btn-container">
        {categories.map((category, index) => {
          return <SingleCategory key={index} category={category} filterItem={filterItem} /> 
           
          
        })}
      </div>
    )
}

export default Categories
