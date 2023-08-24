import React from 'react';

const Search = () => {
  return (
    <div className='search_container'>
    {/* search bar */}
      <input type='text' placeholder='Find a user'className='search_bar'/>
      {/* found user */}
      <div className='find_user'>
       <img src='https://th.bing.com/th/id/OIP.2svrXiC54e3ETDqB15I74wHaDt?w=329&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Find contact' className='img_find_user'></img>
       <p>Jane Foster</p>
      </div>
    </div>
  )
}

export default Search;
