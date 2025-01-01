
import './App.css'
import Navbar from './components/Navbar'
import TaskList from "./components/TaskList"
function App() {


  return (
    <>
    <Navbar></Navbar>
    <div className='container mx-auto justify'>
    
      
      <div className=' mt-5 mx-auto min-h-[80vh]  w-[60vw] shadow-lg  sm:shadow-slate-200 md:shadow-pink-200 lg:shadow-green-200 rounded-lg sm:bg-slate-300 md:bg-pink-200 lg:bg-green-200'   >
    
   
      <TaskList></TaskList>
       
      </div>

    </div>
      
    </>
  )
}

export default App

