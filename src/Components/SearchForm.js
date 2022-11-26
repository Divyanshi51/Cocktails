import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchvalue = React.useRef(' ');
  useEffect(()=>{
    searchvalue.current.focus()
  },[])
const searchCocktail=(e)=>{
setSearchTerm(searchvalue.current.value)
}
const handlesubmit=(e)=>{
e.preventDefault()
}
  return (
<section className='section search '>
  <form className='search-form' onSubmit={handlesubmit}>
    <div className='form-control'>
      <label htmlFor='name'>search your favorite cocktail</label>
      <input type="text" id='name' ref={searchvalue}
      onChange={searchCocktail }/>
    </div>
  </form>
</section>
    )
}

export default SearchForm