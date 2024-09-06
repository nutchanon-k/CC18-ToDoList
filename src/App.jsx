import { useState } from 'react'
import AppRouter from './routes/AppRouter'
import { ToastContainer,toast } from 'react-toastify'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToastContainer />
       <AppRouter/>
    </>
  )
}

export default App
