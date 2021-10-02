import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        //map tasks to list, using task id as propkey and display task text
        <>
            {tasks.map((task) => (<Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
            />))}
        </>
    )
}

export default Tasks
