import React,{useContext} from 'react'
import noteContext from '../context/noteContext'


export default function Sidebar() {
  const a = useContext(noteContext)
  const {name,branch} = a.state
 
  const changed = (e)=>{
    var s={"name":e.target.value,"branch":branch}
    a.changeName(s)
  }
  const changedBranch =(e)=>{
    var s={"name":name,"branch":e.target.value}
    a.changeBranch(s)
  }
 
  return (
    <div className="flex flex-col p-10">
      <div>
        <label htmlFor="name">NAME:</label>
        <input type="text" placeholder="NAME" value={name} id="name" onChange={changed} className='h-12 p-2 m-2'/>
      </div>
      <div>
        <label htmlFor="branch">BRACNCH:</label>
        <input type="text" placeholder="branch" id="branch" value={branch} onChange={changedBranch} className='h-12 p-2 m-2'/>
      </div>
    </div>


  )
}
