import React from 'react'
import SingleMenu from './SingleMenu'
const Menu = ({menuItems}) => {
    return (
        <div className='section-center'>
            {menuItems.map((menu)=>{
                return <SingleMenu key={menu.id} {...menu} />
            })}
        </div>
    )
}

export default Menu
