import React from 'react'
import mic from "../images/google-voice.png"
const SearchButton = () => {
  return (
    <div className='search'>
      <input type='search'  />
      <img src={mic} alt='mic' /></div>
  )
}

export default SearchButton