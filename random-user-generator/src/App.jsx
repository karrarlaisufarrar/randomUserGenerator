import { useEffect, useState } from 'react'
import Body from './Body';


function App() {
  const [user, setUser] = useState("")
  const getData = () => {
    fetch("https://randomuser.me/api/").then((response) => response.json()).then((data) => setUser(data.results[0]));
    }
  useEffect(()=>{
    getData();
  }, []);
  return (
    <>
    <Body {...user} getData={getData}/>
    </>
  )
}

export default App
