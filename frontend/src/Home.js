import React from 'react'
import { useState } from 'react';
import './App.css';
import {  useForm } from "react-hook-form";

function Home() {
    const url='https://encouraging-gray-sandals.cyclic.cloud'
let { register, handleSubmit, formState: { errors } } = useForm();
let [state,setstate]=useState(false);
let [urll,setUrl]=useState(url);
let [loading,setLoad]=useState(false);
let [firstuse,used]=useState(false)

function submit(data){
  used(true)
setLoad(true)
fetch(url+'/up',{method: "POST",
body: JSON.stringify(data),
headers: {
"Content-type": "application/json"
}})
.then((res)=>res.json())
.then((fkey)=>{
  // console.log("pushfulll",fkey);
  setstate(true);setUrl("https://wee-url.cyclic.cloud/"+fkey.key);
setLoad(false)})
.catch((err)=>console.log(err))
}
// ?

  return (
    
    <div className="App">
     <h1 className='text-center text-warning p-2'>Shorten Your Url's</h1>
     <div className='d-flex justify-content-center p-4'>
      <div id='mess' className='text-center'>

      <form onSubmit={handleSubmit(submit)} className='p-3 card shadow-lg'>
      <p className='display-5 text-success'>Paste your URL here</p>

      <div className='p-5'>
      <input type="url" {...register("url",{required:true})} placeholder="paste your url here" className='form-control'/>
      {/* {console.log(errors)} */}
      {errors.url?.type==="required" && <p className='text-danger'>paste your url</p>}
      </div>
      <button className='btn btn-info' type='submit'>shorten</button>
      </form>
      
      
      {(state && !loading)  ?
      
      <div className='pt-4'>
      <div className='text-center card pt-4'>
        <div className='p-1'>
      <h5>Link for your URL</h5> 
      <div className='d-flex justify-content-center'>

      <a href={urll} target="_blank" rel="noreferrer">{urll}</a>

      <button className='btn btn-primary ms-3'onClick={()=>{
        navigator.clipboard.writeText(urll);
        alert("Link Copied")}
        
        
        }>Copy</button>


      </div>
      
      
      
      </div>

        
      </div></div>
      
      :
      
      (firstuse && <div className='pt-4' ><div className='card'><h2 id="loading">Creating Your Link!</h2></div></div>)
      
      }
     </div></div>
    </div>
  );
}

export default Home;