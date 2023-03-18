import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { goster } from './Functions';
function Slidebar() {
  return (
    <div class="me-10 bg-dark" style={{ width: '250px', height: "1000px", fontFamily: "fantasy", fontSize: "40px" }}>
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">

        <span class="fs-4 link-light mt-4 mb-4">MENÜ</span>
      </a>

      <ul class="nav nav-pills flex-column mb-auto" style={{fontSize: "25px"}}>
        <li class="nav-item mb-4">
          <a id="Yemekler" class="nav-link link-light" onClick={() => goster("Yemekler")} >Yemekler</a>
        </li>
        <li class="nav-item mb-4">
          <a id="Tatlılar" onClick={() => goster("Tatlılar")} class="nav-link link-light">
            Tatlılar
          </a>
        </li>
        <li class="nav-item mb-4">
          <a id="Icecekler"  onClick={() => goster("İçecekler")} class="nav-link link-light">
            İçecekler
          </a>
        </li>
       
      </ul>

      {/* <div class="dropdown">
          <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
           
            <strong>mdo</strong>
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div> */}
    </div>
  );
}
export default Slidebar;