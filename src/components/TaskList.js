export default function TaskList( { tasks, handleDelete } ) {

  return tasks.map( ( task ) => (
    <ul key={task.id} className="task-list">
      <li className="task">
        {task.text}
      </li>
      <i
        onClick={() => handleDelete( task.id )} className="task-delete"
      >
        X
      </i>
    </ul>
  ) )
}

