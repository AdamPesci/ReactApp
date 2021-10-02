//import react icons 
import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle }) => {
    return (
        // stuff in `` will change div classname depending on whether or not reminder is true/false
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
