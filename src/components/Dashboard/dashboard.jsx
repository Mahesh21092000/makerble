import React from 'react';
import Sidebar from '../Sidebar/sidebar';
import Main from '../Main/main';
import Todo from '../Right-sidebar/Todo'
import 'bootstrap/dist/css/bootstrap.min.css';

function dashboard() {
  return (
    <div style={{display: 'flex', marginTop: '10px'}}>
      <Sidebar/>     
      <Main/>
      <Todo/>
    </div>
  )
}

export default dashboard
