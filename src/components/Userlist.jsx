import React from 'react';
import './Userlist.css';

const Userlist = ({userList, handleDeleteBtn}) => {
  return (
    <>
      <ul className='main'>
      {userList.map(data =>{
        return (
        <div className='api-container'>
        <li key={data.id}>{data.id} {data.title}</li>
        <button className="api-btn" onClick={() => {handleDeleteBtn(data.id)} }>Delete</button>
        </div>
    );
    })}
    </ul>
    </>
  )
}

export default Userlist
