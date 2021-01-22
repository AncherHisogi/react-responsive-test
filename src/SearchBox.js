import React from 'react';

const SearchBox = ({searcfield, searchChange}) =>{
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba b--light-blue bg-lightest-blue tc'
                type='search' 
                placeholder='search friends' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;