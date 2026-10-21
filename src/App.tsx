import { useState } from "react";
import type { Task } from "./types/task";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { generateId } from "./utils/generateId";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Review client proposal", status: "pending" },
    { id: "2", title: "Send weekly report", status: "completed" },
    { id: "3", title: "Schedule team meeting", status: "pending" },
  ]);

  const pendingCount = tasks.filter((task) => task.status === "pending").length;

  const handleAddTask = (title: string) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      return;
    }

    const newTask: Task = {
      id: generateId(),
      title: trimmedTitle,
      status: "pending",
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const handleDeleteTask = (idToDelete: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== idToDelete)
    );
  };

  const handleToggleComplete = (idToToggle: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id === idToToggle) {
          return {
            ...task,
            status: task.status === "completed" ? "pending" : "completed",
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-xl">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Personal Task Dashboard
          </h1>
          <span className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full border border-blue-200">
            {pendingCount} pending {pendingCount === 1 ? "task" : "tasks"}
          </span>
        </header>

        <AddTaskForm onAddTask={handleAddTask} />

        <TaskList
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggleComplete={handleToggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
