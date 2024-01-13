import { useSelector } from "react-redux"
import { selectUser } from "../features/loggedUserSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { selectTodos } from "../features/TodosSlice"
import NavBar from "./NavBar"
import ToDoComponent from "./ToDoComponent"
import AddTodoComponent from "./AddTodoComponent"


const TodosPage =() =>{
    const user = useSelector(selectUser).loggedUser
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    })
   
    const todos = useSelector(selectTodos)

    return(
        <div className="min-h-full">
            <NavBar/>
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <AddTodoComponent />
            {todos.map((todo) => (
                        <article key={todo.id} className="flex mx-auto my-10 px-5 py-3 flex-col items-start justify-between shadow-lg ring-1 ring-inset ring-gray-300 rounded-lg">
                            <ToDoComponent todo={todo} />
                        </article>
                    ))}
            </div>
            </main>
        </div>
    )
}
export default TodosPage;