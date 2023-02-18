import React,{useState} from 'react'

const Searchbar = ({search}) => {
  const [toggleSearch, setToggleSearch] = useState(false)

  function handleSearch() {
    setToggleSearch(prev => !prev)
    console.log(toggleSearch)
  }

  return (
    <div>
      <img onClick={handleSearch} className='w-5 h-5 cursor-pointer' src="./assets/search-interface-symbol.png" alt="" />
      {toggleSearch && <input 
      type='text' 
      className='placeholder:text-sm 
      absolute top-4 right-44 rounded-lg bg-slate-200 w-64 h-8
      text-slate-700
      font-serif
       '
      placeholder='Search..'
      >
        </input>}
    </div>
  )
}

export default Searchbar;