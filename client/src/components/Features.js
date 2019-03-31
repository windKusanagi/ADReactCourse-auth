import React from 'react'
import requireAuth from './requireAuth';

const Features = () => {
  return (
    <div>
      <h3>New Features</h3>
    </div>
  )
}

export default requireAuth(Features);
