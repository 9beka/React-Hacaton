import React from 'react';
import Views from "./views"
import SideBar from './SideBar/SideBar';
const App = () => {
  return (
    <div className='container'>
      <SideBar/>
      <Views/>
    </div>
  );
};

export default App;