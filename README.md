# To-Do List Application

A modern, feature-rich To-Do List application built with React that demonstrates state management, form validation, and persistent storage using localStorage.

## ✨ Features

- ✅ **Full CRUD Operations**: Add, edit, delete, and mark tasks as completed
- 🔍 **Smart Filtering**: Filter tasks by all, active, or completed status
- 💾 **Persistent Storage**: Tasks are saved to localStorage and persist between sessions
- ✏️ **Form Validation**: Ensures task name and description are provided before submission
- 🎨 **Modern UI**: Beautiful glassmorphism design with smooth animations
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🌈 **Visual Feedback**: Distinct styling for active and completed tasks
- ⚡ **Real-time Statistics**: Track total, active, and completed tasks

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd "c:\Users\lenovo\OneDrive\Desktop\custom hooks"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
custom hooks/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx      # Form component for adding/editing tasks
│   │   ├── TaskItem.jsx      # Individual task display component
│   │   └── TaskList.jsx      # Task list container component
│   ├── hooks/
│   │   └── useLocalStorage.js # Custom hook for localStorage persistence
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── package.json              # Project dependencies
└── vite.config.js            # Vite configuration
```

## 🎯 How to Use

### Adding a Task
1. Fill in the "Task Name" and "Description" fields in the form
2. Click the "➕ Add Task" button
3. The task will appear in the list below

### Editing a Task
1. Click the ✏️ (edit) button on any task
2. The form will populate with the task's current details
3. Modify the fields as needed
4. Click "💾 Update Task" to save changes or "✖️ Cancel" to discard

### Completing a Task
1. Click the checkbox next to any task to mark it as completed
2. Completed tasks will have a strikethrough effect and reduced opacity
3. Click again to mark as active

### Deleting a Task
1. Click the 🗑️ (delete) button on any task
2. Confirm the deletion in the popup dialog
3. The task will be permanently removed

### Filtering Tasks
- Click "All" to view all tasks
- Click "Active" to view only incomplete tasks
- Click "Completed" to view only completed tasks

## 🛠️ Technology Stack

- **React 18.2**: Modern React with hooks
- **Vite 5.0**: Fast build tool and dev server
- **CSS3**: Custom styling with modern features (gradients, animations, glassmorphism)
- **localStorage API**: Browser-based persistent storage

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Gradient Backgrounds**: Vibrant color gradients throughout
- **Smooth Animations**: Fade-in, slide-in, and hover effects
- **Custom Checkbox**: Styled checkbox with smooth transitions
- **Responsive Layout**: Mobile-first design approach
- **Dark Theme**: Easy on the eyes with a modern dark color scheme

## 📝 Code Structure

### Components

- **App.jsx**: Main component managing application state and task operations
- **TaskForm.jsx**: Reusable form for both adding and editing tasks with validation
- **TaskList.jsx**: Container component that maps through tasks
- **TaskItem.jsx**: Individual task display with actions (complete, edit, delete)

### Custom Hooks

- **useLocalStorage.js**: Syncs React state with browser localStorage for persistence

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌟 Additional Considerations

- **Data Persistence**: All tasks are automatically saved to localStorage
- **Form Validation**: Both task name and description are required fields
- **Confirmation Dialogs**: Delete operations require user confirmation
- **Error Handling**: Graceful error handling for localStorage operations
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized re-renders with React best practices

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

Built with ❤️ using React and Vite
