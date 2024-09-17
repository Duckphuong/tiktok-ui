import { useStore, actions } from './store';
function Todo() {
    const [state, dispatch] = useStore();
    // console.log(state);
    const { todos, todoInput } = state;

    // console.log(todoInput);
    const handleAdd = () => {
        dispatch(actions.addTodoInput(todoInput));
    };
    console.log(todos);
    return (
        <div>
            <input
                value={todoInput}
                placeholder="nhap di"
                onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
            />
            <button onClick={handleAdd}>ADD</button>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </div>
    );
}
export default Todo;
