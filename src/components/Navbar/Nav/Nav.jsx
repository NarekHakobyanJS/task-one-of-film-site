import React from 'react'

function Nav({genre}) {
    return (
        <nav className='nav'>
            <div className='nav-link'>
               {genre.name}
            </div>
        </nav>
    )
}

export default Nav