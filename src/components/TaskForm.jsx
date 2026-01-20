import { useState, useEffect } from 'react';

function TaskForm({ onSubmit, initialTask = null, onCancel }) {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialTask) {
            setTaskName(initialTask.name || '');
            setTaskDescription(initialTask.description || '');
        } else {
            setTaskName('');
            setTaskDescription('');
        }
        setErrors({});
    }, [initialTask]);

    const validateForm = () => {
        const newErrors = {};

        if (!taskName.trim()) {
            newErrors.name = 'Task name is required';
        }

        if (!taskDescription.trim()) {
            newErrors.description = 'Task description is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit({
                name: taskName.trim(),
                description: taskDescription.trim(),
            });

            if (!initialTask) {
                setTaskName('');
                setTaskDescription('');
            }
            setErrors({});
        }
    };

    const handleCancel = () => {
        setTaskName('');
        setTaskDescription('');
        setErrors({});
        onCancel();
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2 className="form-title">
                {initialTask ? '✏️ Edit Task' : '➕ Add New Task'}
            </h2>

            <div className="form-group">
                <label htmlFor="taskName" className="form-label">
                    Task Name *
                </label>
                <input
                    type="text"
                    id="taskName"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Enter task name..."
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="taskDescription" className="form-label">
                    Description *
                </label>
                <textarea
                    id="taskDescription"
                    className={`form-input form-textarea ${errors.description ? 'error' : ''}`}
                    placeholder="Enter task description..."
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    rows="3"
                />
                {errors.description && (
                    <span className="error-message">{errors.description}</span>
                )}
            </div>

            <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                    {initialTask ? '💾 Update Task' : '➕ Add Task'}
                </button>
                {initialTask && (
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCancel}
                    >
                        ✖️ Cancel
                    </button>
                )}
            </div>
        </form>
    );
}

export default TaskForm;
