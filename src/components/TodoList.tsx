import { useSelector } from 'react-redux'

export function TodoList() {
    const todos = useSelector(store => store.todo)

    return(
        <ul>
            {todos.map(todo => <li ley={todo}>{todo}</li>)}
        </ul>
    )
}