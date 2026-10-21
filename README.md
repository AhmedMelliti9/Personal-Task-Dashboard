# Personal Task Dashboard

A clean, responsive React application built with TypeScript and Tailwind CSS to help freelance consultants and professionals organize daily tasks, track pending vs. completed work, and manage items at a glance.

## Features

- **Task List Overview (FR-01, FR-02)**: Displays all daily tasks with title and status (`pending` or `completed`).
- **Add Tasks (FR-03)**: Fast creation of new tasks with instant input clearing.
- **Completion Toggle (FR-04)**: Mark tasks as completed or revert back to pending with distinct visual status (strikethrough text, colored badges).
- **Task Deletion (FR-05)**: Easily remove tasks that are no longer needed.
- **Pending Task Counter (FR-06)**: Dynamic counter in the header that accurately tracks and updates the number of pending tasks in real-time.
- **Empty State Display (FR-07)**: Helpful empty state message shown on initial load and whenever all tasks have been removed.
- **Input Validation & Security**: Strips surrounding whitespace and disallows empty or whitespace-only submissions with descriptive error feedback.

## Tech Stack

- **React 19** (bootstrapped with **Vite**)
- **TypeScript** for strict type safety
- **Tailwind CSS v4** for clean, accessible styling
- **React `useState`** for local state management (no external state libraries or persistence)

## Project Structure

```
src/
├── main.tsx             # Application entry point
├── App.tsx              # Top-level state owner and layout
├── types/
│   └── task.ts          # Task & TaskStatus TypeScript definitions
├── components/
│   ├── AddTaskForm.tsx  # Input form with validation for new tasks
│   ├── TaskList.tsx     # Task list container & empty state renderer
│   └── TaskItem.tsx     # Single task item with toggle & delete actions
└── utils/
    └── generateId.ts    # Pure utility function for unique IDs
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` (or `yarn` / `pnpm`)

### Installation & Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/AhmedMelliti9/Personal-Task-Dashboard.git
   cd Personal-Task-Dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Building for Production

To create an optimized production build:
```bash
npm run build
```
