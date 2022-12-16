import React,{useContext} from 'react'
import noteContext from '../context/noteContext'

export default function Resume() {

const a=useContext(noteContext)


  return (
    <div className="p-10">
        <div ><span className='font-semibold my-5 text-2xl'> NAME: </span><span className='text-xl'>{a.state.name}</span></div>
        <div ><span className='font-semibold my-5 text-2xl'>BRANCH:</span><span className='text-xl'>{a.state.branch}</span></div>
    </div>
  )
}
