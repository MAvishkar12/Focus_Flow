import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiCalendarTodoLine } from "react-icons/ri";

function TaskList() {
  const [todotext, settodotext] = useState("");
  const [todos, setTodos] = useState([]);
  const[showFinished,setShowFinished]=useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
   

    if (todoString) {
      let todo = JSON.parse(localStorage.getItem("todos"));
      setTodos(todo);
    }
  }, []);

  const storeLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleaddTask = () => {
    if (todotext.trim() === "") {
      alert("No empty Task Allowed..!")
      return
    };
    setTodos((prev)=>[...prev,{ id: uuidv4(), todotext:todotext, isCompleted: false }])
    //setTodos([...todos, { id: uuidv4(), todotext, isCompleted: false }]);
   // make input empty once todo add
     
         
    storeLocalStorage();
    settodotext(""); 
    console.log("New todo add",todos);
    
  };

  const handleDelete = (id) => {
    let newtodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newtodos);
    storeLocalStorage()
  
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    settodotext(t[0].todotext); // Add todo to input part
    let newtodos = todos.filter((item) => {
      // delete it from todo list
      return item.id != id;
    });
    setTodos(newtodos);
    storeLocalStorage();
  };

  const handletodotext = (e) => {
    settodotext(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;

    let index = todos.findIndex((item) => {
      return item.id === id;
    });

    let newtodo = [...todos];
    newtodo[index].isCompleted = !newtodo[index].isCompleted;
    setTodos(newtodo);
    storeLocalStorage();
  };
  const toogleFinished=()=>{
    
    setShowFinished(!showFinished)
  }

  return (
    <>
     
      <RiCalendarTodoLine className="text-4xl text-red-700 mx-3 " />
      <div className="flex justify-center my-4">
        <h1 className="text-center text-2xl text-pink-800 font-bold">Add Todos</h1>
      </div>
      <div className="flex justify-center gap-6">
        <input
          //className="px-10 border-solid border-2 border-red-600 "
         className=" w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition-shadow  focus:shadow-[0px_4px_10px_white"
          type="text"
          value={todotext}
          onChange={handletodotext}
        ></input>
        <button
          onClick={handleaddTask}
          className="bg-indigo-500 shadow-lg shadow-indigo-500/50  hover:bg-indigo-300 hover:text-black   px-4 py-2 text-white rounded-xl ]"
        >
          Save 
        </button>
      </div>
      <div className="flex gap-3 mt-5 mx-5">
      <input className=" w-5 h-5 " onChange={toogleFinished} checked={showFinished} type="checkbox"/> 
       <p>Show  Completed Task</p>
       </div>
      <h1 className="text-center text-3xl text-violet-800 py-5  font-bold italic ">
        Your - Todos
      </h1>
      {todos.length === 0 ? (
        <h3 className="text-red-600 text-xl  mx-5 font-semibold">No Todod Present....</h3>
      ) : (
        ""
      )}
     
      {todos.map((val) => {
        return (showFinished || !val.isCompleted) && (
          <div className="flex flex-col justify-center ">
          <div
            key={val.id}
            className="flex mt-3 md:w-[10vw] mx-5 space-x-10  "
          >
            <div className="flex gap-5">
            <input
              name={val.id}
              onChange={handleCheckbox}
              type="checkbox"
              checked={val.isCompleted}
              className="w-5 h-5 "
            
            ></input>
          <div className="w-80 sm:w-28 md:w-40  p-1 ">
            <div className={val.isCompleted ? "line-through" : ""}>

             <p className="break-words whitespace-normal italic font-semibold" >{val.todotext}</p> 
            </div>
            </div>
            </div>

            <div className="flex gap-5 mx-10">
             
              <FaEdit onClick={(e) => { handleEdit(e, val.id) }} className=" sm:text-sm md:text-2xl text-green-400"  />
               <MdDelete  className=" text-red-500  sm:text-sm md:text-2xl" onClick={() => handleDelete(val.id)} />
             
            </div>
          </div>
          </div>
   
        );
      })}
      
    </>
  );
}

export default TaskList;
