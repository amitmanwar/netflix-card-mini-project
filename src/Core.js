import React from 'react'
import './App.css'
import Card from './Card'
import Sdata from './Sdata'

const Core = () => {

 return (
    <>
    <h1 className='heading-style'>List of top Netflix Series in 2022</h1>

 {Sdata.map((val,index)=>{
    console.log(index)
    return(
      <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
      />
    )
   })}
   
    </>
  )
}

export default Core