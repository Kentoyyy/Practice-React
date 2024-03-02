import React from 'react';
import Navbar from './navbar';

function Header(props) {
    return (
       <div id='main'>
         <Navbar/>
         <div className='name'>
            <h1>My Personal Portoflio</h1>
         </div>
       </div>

    );
}

export default Header;