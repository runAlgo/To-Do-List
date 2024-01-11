"use client"
import React, { useState } from 'react'

const Page = () => {
    const [Task, setTask] = useState("")
    const [Desc, setDesc] = useState("")
    const [myRoutine, setmyRoutine]: any = useState([])
    const submitHandler = (e: any)=> {
        e.preventDefault();
        setmyRoutine([...myRoutine, {Task, Desc}])
        setTask("")
        setDesc("")
        console.log(myRoutine)
    }
    let randerTask = <h5>No Task Available</h5>

    const deleteTask = (i: any) => {
      let copyTask = [...myRoutine]
      copyTask.splice(i, 1)
      setmyRoutine(copyTask)
    }
    
    if(myRoutine.length > 0) {
      randerTask = myRoutine.map((t: any, i: number) => {
        return (
          <>
          <li key={i} className='flex justify-between items-center m-4'>
            <div className='flex justify-between items-center mb-5 w-2/3'>
              <h5 className='font-bold text-xl'>{t.Task}</h5>
              <h5>{t.Desc}</h5>
            </div>
            <button onClick={()=>{deleteTask(i)}} className='bg-red-500 rounded text-white p-2'>Delete</button>
          </li>
          <hr />
          </>
        )
    })
    }
    
  return (
    <>
   <h1 className='bg-slate-500 text-2xl font-bold text-white text-center p-2'>TO_DO_LIST</h1>
   <form onSubmit={submitHandler} action="">
    <input value={Task} onChange={(e)=>{setTask(e.target.value)}} type="text" placeholder='Enter your Task here' className='m-4 border-2 border-zinc-800 rounded py-3 px-7 text-xl'/>
    <input value={Desc} onChange={(e)=>{setDesc(e.target.value)}} type="text" placeholder='Enter your Description here' className='border-zinc-800 border-2 rounded py-3 px-7 text-xl'/>
    <button className='bg-green-600 text-white rounded py-2 px-2 m-5'>Add_Task</button>
   </form>
   <hr />
   <div className='bg-slate-300 p-4'>
    <ul>
    {randerTask}
    </ul>
   </div>
    </>
  )
}

export default Page