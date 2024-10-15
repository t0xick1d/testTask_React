import React, { ReactElement } from 'react';
import style from './App.module.scss';
import { useGetPokemonByNameQuery } from './store/sercives/pocemon';

function App(): ReactElement {
   const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
   return (
      <div className={style.app}>
         {error ? (
            <>Oh no, there was an error</>
         ) : isLoading ? (
            <>Loading...</>
         ) : data ? (
            <>
               <h3>{data.species.name}</h3>
               <img src={data.sprites.front_shiny} alt={data.species.name} />
            </>
         ) : null}
      </div>
   );
}

export default App;
