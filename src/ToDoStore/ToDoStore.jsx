import React from 'react'
import { create, useStore } from 'zustand'
import { persist } from 'zustand/middleware'


const tdStore = (set) =>({
    arr: [
        { id: 1, title: 'Work 1' ,isEdit : false, isFinish : false },
        { id: 2, title: 'Work 2' ,isEdit : false, isFinish : false }
    ],
    addArr: (newValue) => set((prev) => (
        prev.arr.length != 0 ? 
        {arr : [...prev.arr, { id: prev.arr[prev.arr.length - 1].id + 1, title: newValue, isEdit : false, isFinish : false }]}:
        {arr : [{id : 1, title : newValue, isEdit : false, isFinish : false }]}
    )),
    deleteArr: (id) => set((prev) => ({
        arr : [...prev.arr].filter(el=>el.id != id)
    })),

    editArr: (idFromHome, newValue, status) => set((prev)=>({
        arr :[...prev.arr].map(el=>(idFromHome == el.id ? {id : el.id, title : newValue, isEdit : status, isFinish : false}: el))
    })),

    finishArr: (idFromHome,status) => set((prev)=>({
        arr :[...prev.arr].map(el=>(idFromHome == el.id ? {id : el.id, title : el.title, isEdit : el.isEdit, isFinish : status}: el))
    }))
})

const usePersist = {
    name : 'ToDoStore',
    getStorage : ()=>localStorage,
    partialize : (state)=>({
        arr : state.arr
    }) 
}

const ToDoStore = create(persist(tdStore, usePersist))


export default ToDoStore