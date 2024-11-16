import TodoItems from "./TodoItems";
import styles from "./todolist.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItems
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        /> // Add a key prop
      ))}
    </div>
  );
}
