import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Products from './comp/Products';
import { useDispatch } from 'react-redux';
import { addData } from './features/apiSlice';

function App() {

  const dis = useDispatch()

  const api = `https://dummyjson.com/products`;

  const fetchAxios = () => {
    axios
      .get(api)
      .then((res) => {
        dis(addData(res.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  useEffect(() => {
    fetchAxios();
  }, []);
 

  return (
    <div className="App">
      <header className="App-header">

        <h1>redux</h1>
        {/* {prod.length > 0 ? <Products data={prod} /> : <p>Loading...</p>} */}
        <Products />
      </header>
    </div>
  );
}

export default App;
