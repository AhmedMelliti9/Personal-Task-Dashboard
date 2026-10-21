import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
}

function TaskItem({ task, onDelete }: TaskItemProps) {
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

      <div className="flex items-center gap-2">
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            isCompleted
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.status}
        </span>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className="text-xs text-red-600 hover:text-red-800 font-medium px-2 py-1 border border-red-200 hover:border-red-400 rounded transition-colors"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
