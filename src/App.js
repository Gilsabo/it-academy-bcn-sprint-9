import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";


function App() {

  const [fetchData, setFetchData]=useState([])

  useEffect(()=>{
    axios
    .get('https://fakestoreapi.com/products')
    .then((response)=>{
      setFetchData(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  },[])
  console.log(fetchData)

  const findCategory =()=>{
    fetchData.map((data)=>
    console.log(data.category)
    )
  }
  findCategory()
  return (
    <div className="App">
      <>
      <h1>YouTooShop</h1>
      <h3>Outfits and complements to start your career as a Youtuber</h3>
      </>
    </div>
  );
}

export default App;
