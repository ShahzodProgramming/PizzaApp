import React from 'react'
import { useParams } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='mx-auto flex flex-col items-center gap-5'>

      <p className="text-6xl">404</p>
      We apologize but the page couldn't be found.
    </div>
  )
}
