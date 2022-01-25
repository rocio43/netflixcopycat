import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
        <header className={black?'black':''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/640px-Logonetflix.png' alt='Netflix'/>
             </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png' alt='Usuário'/>
                </a>
            </div>
        </header>
    );
}