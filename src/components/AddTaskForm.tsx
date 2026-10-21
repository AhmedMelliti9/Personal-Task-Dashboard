import { useState } from "react";

interface AddTaskFormProps {
  onAddTask: (title: string) => void;
}

function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setErrorMessage("Task title cannot be empty");
      return;
    }

    onAddTask(trimmedTitle);
    setTitle("");
    setErrorMessage("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
        >
          Add Task
        </button>
      </div>
      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}

export default AddTaskForm;
