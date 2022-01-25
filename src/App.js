import React, {useEffect, useState} from 'react';
import './App.css';
import tmdb from './Tmdb';
import ListaFilme from './components/ListaFilme';
import FilmeDestaque from './components/FilmeDestaque';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [DataDestaque, setDataDestaque] = useState(null);
  
  useEffect(()=>{
    const loadAll = async () => {
      
      let list = await tmdb.getHomeList();
      setMovieList(list);

      
      let originals = list.filter(i=>i.slug==='originals');
      let randomChosen = Math.floor(Math.random()*(originals[0].itens.results.length -1))
      let chosen = originals[0].itens.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setDataDestaque(chosenInfo);
    }

    loadAll();
  }, [])

  useEffect(()=>{
    
    
  }, []);

  return(
    <div className='page'>

      {DataDestaque &&
        <FilmeDestaque item={DataDestaque}/>
      }

      <section className='lists'>
        {movieList.map((item,key)=>(
         <ListaFilme key={key} title={item.title} itens={item.itens} />
        ))}
      </section>
      <footer>
        Copycat feito por Ruan<br/>
        Direitos de imagem para Netflix<br/>
        Dados do site Themoviedb.org
      </footer>
    </div>
  )
}