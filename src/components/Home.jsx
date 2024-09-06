import React, { useState } from 'react'
import ToDoStore from '../todoStore/ToDoStore'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    
    
    
    const {arr, addArr, deleteArr, editArr, finishArr} = ToDoStore((state)=>({ 
        arr : state.arr,
        addArr : state.addArr,
        deleteArr : state.deleteArr,
        editArr : state.editArr,
        finishArr : state.finishArr
    }))

    const [txt, setTxt] = useState('')
    const [txtEdit, setTxtEdit] = useState(arr)

    
    //****** for Add, Delete *******//
    const hdlChange = (e) =>{
        setTxt(e.target.value)
    }
  
    const hdlClickAdd = (e) =>{
        addArr(txt) 
        toast.success('Add Item Success')
        setTxt('')
        setTxtEdit(prev=>([...prev, {id: prev[prev.length - 1].id + 1, title: txt, isEdit : false, isFinish : false}]))   
        
    }
    
    const hdlClickDel = (id) =>{
        deleteArr(id) 
        toast.info('Delete Item Success')
    }

    
    // 
    //******  for edit *******//
    const hdlChangeEdit = (e, id, index) =>{
        // console.log(e.target.value)
        const editText = [...txtEdit]
        // console.log(editText)
        editText[index].title = (e.target.value)
        setTxtEdit(arr)
        // console.log(txtEdit)
    }
    
    const hdlClickEdit = (id, title, isEdit, num, index ) =>{
        if(num === 0){editArr(id, title, !isEdit)}
        else{editArr(id, txtEdit[index].title, !isEdit)}
        
        console.log(txtEdit)// setTxtEdit('')
       
        
    }

    const hdlClickFinish = (id, isFinish) =>{
        finishArr(id, !isFinish) 
    }


    console.log('Fore Edit', txtEdit)
    // console.log(txt)
    console.log('test',arr)
    // console.log(addArr)
  
    return (
    <div className='p-5 bg-yellow-100 flex flex-col mt-10 gap-5 items-center w-3/4 m-auto'>
        <h1 className='text-3xl'>Todo List</h1>
        <div className='flex gap-4 w-full'>
            <input className='border p-1 flex-1 w-full' type="text" name="detail" placeholder='Input here' value={txt} onChange={hdlChange}/>
            <button className='px-4 py-1 bg-green-300 border rounded-lg' onClick={hdlClickAdd}>Add</button>
        </div>
        <ol className=' w-full flex flex-col gap-2'>
            {arr.map((el,index)=>(
                <div className='flex justify-between gap-2' key={el.id}>
                  {!el.isEdit? <li className={` ${el.isFinish? "line-through  bg-amber-100":  "bg-amber-300"} p-4 list-decimal list-inside flex-1 rounded-lg`} onClick={()=>hdlClickFinish(el.id, el.isFinish)}>{el.title}</li> :  
                    <li className='p-4  bg-amber-300 flex-1 rounded-lg'><input className='border p-1 flex-1 w-full' type="text" name="detail" defaultValue={el.title} onChange={(e)=>hdlChangeEdit(e, el.id, index)}/></li> 
                    }


                  
                  {!el.isEdit? 
                    ( !el.isFinish? <button className='bg-green-200 p-4 rounded-lg' onClick={()=>hdlClickEdit(el.id, el.title, el.isEdit, 0, index)}>Edit</button> : <p className='p-4'>Edit</p>) :
                    <button className='bg-green-400 p-4 rounded-lg' onClick={()=>hdlClickEdit(el.id, el.title, el.isEdit, 1, index )}>Confirm</button> 
                    }
                  
                  <button className='bg-red-300 p-4 rounded-lg' onClick={()=>hdlClickDel(el.id)}>Delete</button>
                </div>
            ))}
        </ol>
    </div>
  )
}

export default Home