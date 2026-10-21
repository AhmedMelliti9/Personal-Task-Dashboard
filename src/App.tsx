import { useState } from "react";
import type { Task } from "./types/task";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Review client proposal", status: "pending" },
    { id: "2", title: "Send weekly report", status: "completed" },
    { id: "3", title: "Schedule team meeting", status: "pending" },
  ]);

  const handleDeleteTask = (idToDelete: string) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== idToDelete)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Personal Task Dashboard
        </h1>
        <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;
