import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
  return (
<section className='error-page section'>
  <div className='error-container'>
    <h1>OOOPS! it's a dead end</h1>
    <Link to="/" className='btn btn-primary'>Back to Home page</Link>
  </div>
</section>
  )
}
