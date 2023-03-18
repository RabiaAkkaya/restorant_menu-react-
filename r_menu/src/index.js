import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slidebar from './Slidebar';
import Card from './Card';
import { garson } from './Functions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="row">
      <div id="slidebar" class="col-2">
        <Slidebar/>
        </div>
      <div id="icerik"class="col-8">
     
      </div>
      <div style={{fontFamily:"fantasy",fontSize:"20px",backgroundColor:"lightgray"}} class="col-2">      
      
      <p class="mb-2" style={{fontFamily:"fantasy",fontSize:"25px",backgroundColor:"lightgray"}} id="sepet">< br></br>SEPET<br></br><hr></hr></p>
      <hr></hr><p style={{fontFamily:"fantasy",fontSize:"20px"}} id="toplamFiyat"></p>
      <button type="button" className='btn btn-warning' id="cagri" style={{display:"none"}} onClick={()=>garson()}>Garson Çağır</button>
     
        
      </div>

    </div>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
