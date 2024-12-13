import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import Userlist from './components/Userlist';

function App() {
 const [userList, setUserList] = useState([])

const handleDeleteBtn = (id)=>{
  // console.log(id);
  const newList=userList.filter(user => user.id != id);
  setUserList(newList);
}
// API call using Axios in IIFE syntax
 useEffect(()=>{
  (async() => { 
    const response= await axios("https://jsonplaceholder.typicode.com/todos");
    setUserList(response.data);
  }) ();
 }, []);

  return (
      <>
      <h1>API Call</h1>
      <Userlist userList={userList} handleDeleteBtn={handleDeleteBtn}/>
      </>
  )
}

export default App
