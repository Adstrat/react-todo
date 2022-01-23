export default function TaskList( { tasks, handleDelete } ) {

  return tasks.map( ( task ) => (
    <ul key={task.id}>
      <li className="tasks">
        {task.text}
        <span
          onClick={() => handleDelete( task.id )}
        >
          X
        </span>
      </li>
    </ul>
  ) )
}

