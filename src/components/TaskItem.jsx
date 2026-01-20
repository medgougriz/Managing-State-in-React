function TaskItem({ task, onToggleComplete, onEdit, onDelete }) {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-checkbox">
                <input
                    type="checkbox"
                    id={`task-${task.id}`}
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                    className="checkbox-input"
                />
                <label htmlFor={`task-${task.id}`} className="checkbox-label"></label>
            </div>

            <div className="task-content">
                <h3 className="task-name">{task.name}</h3>
                <p className="task-description">{task.description}</p>
                <span className="task-date">
                    Created: {new Date(task.createdAt).toLocaleDateString()}
                </span>
            </div>

            <div className="task-actions">
                <button
                    className="action-btn edit-btn"
                    onClick={() => onEdit(task)}
                    title="Edit task"
                >
                    ✏️
                </button>
                <button
                    className="action-btn delete-btn"
                    onClick={() => onDelete(task.id)}
                    title="Delete task"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
}

export default TaskItem;
