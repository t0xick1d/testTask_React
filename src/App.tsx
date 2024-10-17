import React from 'react';
import style from './App.module.scss';

import Filter from './component/Filter';
import UserList from './component/UserList';

const App: React.FC = () => {
   return (
      <div className={style.app}>
         <div className={style.mainContainer}>
            <section className={style.section +  ' ' + style.filterSection}>
               <Filter />
            </section>
            <section className={style.section}>
               <UserList />
            </section>
         </div>
      </div>
   );
};

export default App;
