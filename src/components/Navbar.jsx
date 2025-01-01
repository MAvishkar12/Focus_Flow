


function Navbar() {
  return (
   <>
   <div  className="flex w-full sm:w-screen justify-between p-4  xs:bg-red-200 sm:bg-red-300 md:bg-green-500  lg:bg-blue-500 " >
    <div className="mx-8">
      <span className="font-bold  italic text-lg">FocusFlow</span>
    </div>
    <ul className="flex justify-around mx-8 gap-5">
      <li className="cursor-pointer hover:font-bold">Home</li>
      <li className="cursor-pointer hover:font-bold">Your Task</li>
    </ul>
   </div>
   
    </>
  )
}

export default Navbar