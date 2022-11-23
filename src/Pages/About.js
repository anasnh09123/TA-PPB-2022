import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import CardProfile from "../component/CardProfile";
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
        .then((res) => {
          githubDataTemp.push(res.data)
        })
        .catch((err) => {
          throw `gagal ${err.message}`; 
        });
      
    }
  
    fetchData()
      .then(
        ()=> setData(githubDataTemp)
      )
      .catch(err=>alert(err));
  },[]);

    return (
        <div className="about grid-container">
            <h1>What is this APP?</h1>
            <p>
                Sneakerzz!!
                Sebuah aplikasi tentang katalog sepatu Sneakers untuk Pria dan Wanita yang berisi informasi tentang 
                Nama Sepatu, Ukuran, Warna, serta Brand. Dengan Aplikasi ini, Pengguna dapat menemukan referensi sepatu
                yang diinginkan sebelum membeli di toko.
            </p>
            
            <h2>Who build this APP?</h2>
            <div className="Profilelist">
       {data.map((gits) => (
          <Fragment key={gits.id}>
            <CardProfile
              avatar={gits.avatar_url}
              username={gits.login}
              email={gits.email}
              bio="Computer Engineering 2020 - Diponegoro University"
              location={gits.location}
            />
          </Fragment>
        ))}
        </div>
        </div>
    )
}
