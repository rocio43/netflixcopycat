import React, { useState } from 'react';
import './ListaFilme.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({title, itens}) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x > 0){
            x=0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = itens.results.length * 150;
        if(window.innerWidth - listW > x){
            x=(window.innerWidth - listW)-60;
        }
        setScrollX(x);
    }

    return(
        <div className='ListaFilme'>
            <h2>{title}</h2>
            <div className='ListaFilme--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className='ListaFilme--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className='ListaFilme--listarea'>
                <div className='ListaFilme--list' style={{
                    marginLeft: scrollX,
                    width: itens.results.length * 150
                }}>
                    {itens.results.length > 0 && itens.results.map((item, key)=>(
                        <div className='ListaFilme--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}