import { useDispatch, useSelector } from "react-redux"
import Todo from "../model/Todo"
import UserComponent from "./UserComponent"
import { selectUsers } from "../features/UsersSlice"
import { AppDispatch } from "../App/Store"
import { selectUser } from "../features/loggedUserSlice"
import { deleteTodo, toggleTodo } from "../features/TodosSlice"

interface TodoProps {
    todo: Todo;
}

const ToDoComponent: React.FC<TodoProps> = ({ todo }) => {
    const user = useSelector(selectUser).loggedUser
    const dispatch = useDispatch<AppDispatch>()

    const users = useSelector(selectUsers)
    const isLoggedUserAuthor = todo.userId === user?.id

    const handleDeleteTodo = () => {
        if (isLoggedUserAuthor) {
            dispatch(deleteTodo(todo.id))
        }
    }

    const handleToggleTodo = () => {
        console.log("handleToggleTodo")
        if (isLoggedUserAuthor) {
            dispatch(toggleTodo(todo.id))
        }
    }

    return (
        <div className="w-full">
        <div className="flex w-full">
        <UserComponent user={users.find((user) => user.id === todo.userId)!} />
            
        </div>
        <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                <a>
                    <span className="inset-0" />
                    {todo.title}
                </a>
            </h3>
            {
                todo.completed
                   
            }
        </div>
    </div >
    )
}

export default ToDoComponent