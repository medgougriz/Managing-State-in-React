import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
    const [tasks, setTasks] = useLocalStorage('tasks', []);
    const [filter, setFilter] = useState('all');
    const [editingTask, setEditingTask] = useState(null);

    const addTask = (task) => {
        const newTask = {
            id: Date.now(),
            ...task,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTasks([...tasks, newTask]);
    };

    const updateTask = (id, updatedTask) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, ...updatedTask } : task
        ));
        setEditingTask(null);
    };

    const deleteTask = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(tasks.filter(task => task.id !== id));
        }
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const getFilteredTasks = () => {
        switch (filter) {
            case 'active':
                return tasks.filter(task => !task.completed);
            case 'completed':
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    };

    const filteredTasks = getFilteredTasks();
    const activeCount = tasks.filter(task => !task.completed).length;
    const completedCount = tasks.filter(task => task.completed).length;

    return (
        <div className="app">
            <div className="container">
                <header className="app-header">
                    <h1 className="app-title">✨ My To-Do List</h1>
                    <p className="app-subtitle">Stay organized and productive</p>
                </header>

                <TaskForm
                    onSubmit={editingTask ? (task) => updateTask(editingTask.id, task) : addTask}
                    initialTask={editingTask}
                    onCancel={() => setEditingTask(null)}
                />

                <div className="task-stats">
                    <span className="stat-item">
                        <strong>{tasks.length}</strong> Total
                    </span>
                    <span className="stat-item">
                        <strong>{activeCount}</strong> Active
                    </span>
                    <span className="stat-item">
                        <strong>{completedCount}</strong> Completed
                    </span>
                </div>

                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                        onClick={() => setFilter('active')}
                    >
                        Active
                    </button>
                    <button
                        className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </button>
                </div>

                <TaskList
                    tasks={filteredTasks}
                    onToggleComplete={toggleComplete}
                    onEdit={setEditingTask}
                    onDelete={deleteTask}
                />

                {filteredTasks.length === 0 && (
                    <div className="empty-state">
                        <p>
                            {filter === 'all' && '📝 No tasks yet. Add one to get started!'}
                            {filter === 'active' && '🎉 No active tasks. Great job!'}
                            {filter === 'completed' && '📋 No completed tasks yet.'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
