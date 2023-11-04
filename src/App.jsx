import { useSelector } from "react-redux"

function App() {

   const todos = useSelector((state) => state.todos)
  return (
     <div className="bg-gray-900 min-h-screen text-white">
        {todos.map((todo)=>todo.id)}
     </div>
  )
}

export default App
