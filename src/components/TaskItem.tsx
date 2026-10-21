import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const isCompleted = task.status === "completed";

  return (
    <li
      className={`flex items-center justify-between p-3 rounded-lg border ${
        isCompleted
          ? "border-green-300 bg-green-50"
          : "border-gray-200 bg-white"
      }`}
    >
      <span
        className={`text-base ${
          isCompleted ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.title}
      </span>

      <span
        className={`text-xs font-medium px-2 py-1 rounded-full ${
          isCompleted
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {task.status}
      </span>
    </li>
  );
}

export default TaskItem;
