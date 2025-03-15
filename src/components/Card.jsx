import React from 'react'

// will use default bg if nothing is passed with the component
// children basically means the content inside the component
const Card = ({children, bg="bg-gray-100"}) => {
  return (
    // this is the default card component
    // the backslashes is basically string concatenation to embed expressions (variables)
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
    {children}
    </div>
  )
}

export default Card