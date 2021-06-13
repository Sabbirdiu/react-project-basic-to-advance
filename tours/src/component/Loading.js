import React from 'react'
import Loading from '../assets/Spinner.gif'
const loading = () => {
    return (
        <div className="loading">
        {/* <h1>loading...</h1> */}
        <img src={Loading} alt="" />
      </div>
    )
}

export default loading
