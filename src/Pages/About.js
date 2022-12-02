import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import React from 'react'
import './About.css'

export default function About() {

    const [data, setData] = useState([])
useEffect(()=>{
    const githubDataTemp = [];
    async function fetchData() {
      
        await axios
        .get("https://api.github.com/users/anasnh09123", {
          headers:{"Authorization": "Bearer "+ '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'}
        })
        
        ;
      
    }
  
    fetchData()
      .then(
        ()=> setData(githubDataTemp)
      );
  },[]);

    return (
        <div className="about">
            <div className="topabout">
            <h1>What is this APP?</h1>
            <p>
                Sneakerzz!!
                Sebuah aplikasi tentang katalog sepatu Sneakers untuk Pria dan Wanita yang berisi informasi tentang 
                Nama Sepatu, Ukuran, Warna, serta Brand. Dengan Aplikasi ini, Pengguna dapat menemukan referensi sepatu
                yang diinginkan sebelum membeli di toko.
            </p>
            </div>
            <h2>Who build this APP?</h2>
            <div className="image">
            <img
              src="https://avatars.githubusercontent.com/u/85046172?v=4"
              alt="author pic"
              ></img>
              </div>
            <div className="Profilelist">
            <h6>
                ANAS NOOR HAKIM
            </h6>
            <h6>
                COMPUTER ENGINEERING
            </h6>
            <h6>
                DIPONEGORO UNIVERSITY
            </h6>
        </div>
        </div>
    )
}
