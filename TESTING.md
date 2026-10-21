# Manual Testing Log

This document records the manual test cases executed for the Personal Task Dashboard.

## Test Cases & Results

### Test 1: Initial Load & Empty State
- **Description**: Verify that on first launch, the task list is empty and an empty state message is shown.
- **Steps**:
  1. Open `http://localhost:5173/` in the browser.
  2. Inspect the task container and pending counter.
- **Expected Result**: Empty state message ("No tasks yet. Add a task above to get started!") is displayed. Pending count displays "0 pending tasks".
- **Observed Result**: Passed.

---

### Test 2: Add Task with Valid Title
- **Description**: Verify that a user can add a task with a valid title and it appears in the list.
- **Steps**:
  1. Enter `"Review client proposal"` into the task input.
  2. Click the `"Add Task"` button or press Enter.
- **Expected Result**: Task appears in the list with title `"Review client proposal"` and `"pending"` status. The input field is cleared.
- **Observed Result**: Passed.

---

### Test 3: Add Task with Empty or Whitespace-Only Title
- **Description**: Verify that empty or whitespace-only task titles cannot be submitted.
- **Steps**:
  1. Leave the input empty and click `"Add Task"`.
  2. Enter `"    "` (spaces only) and click `"Add Task"`.
- **Expected Result**: No task is added to the list. An error message `"Task title cannot be empty"` is displayed below the input field.
- **Observed Result**: Passed.

---

### Test 4: Mark Task as Complete
- **Description**: Verify that marking a task complete toggles its status and updates its visual representation.
- **Steps**:
  1. With `"Review client proposal"` in `"pending"` status, click the `"Complete"` button.
- **Expected Result**: The task's status switches to `"completed"`. The task text shows a line-through, the status badge turns green, and the button changes to `"Mark Pending"`.
- **Observed Result**: Passed.

---

### Test 5: Revert Completed Task to Pending
- **Description**: Verify that clicking `"Mark Pending"` returns a completed task to pending status.
- **Steps**:
  1. Click `"Mark Pending"` on the completed task.
- **Expected Result**: The task returns to `"pending"` status with standard typography and a yellow status badge. The button changes back to `"Complete"`.
- **Observed Result**: Passed.

---

### Test 6: Delete a Single Task
- **Description**: Verify that clicking `"Delete"` removes the targeted task from the list and state.
- **Steps**:
  1. Add tasks `"Task A"` and `"Task B"`.
  2. Click `"Delete"` on `"Task A"`.
- **Expected Result**: `"Task A"` is completely removed from the list; `"Task B"` remains intact.
- **Observed Result**: Passed.

---

### Test 7: Delete All Tasks & Reappearance of Empty State
- **Description**: Verify that deleting all remaining tasks causes the empty state message to reappear.
- **Steps**:
  1. Delete the remaining task (`"Task B"`).
- **Expected Result**: The list becomes empty and the empty state message ("No tasks yet. Add a task above to get started!") reappears.
- **Observed Result**: Passed.

---

### Test 8: Pending Task Count Accuracy
- **Description**: Verify that the pending task count matches the exact count of pending tasks across all operations.
- **Steps**:
  1. Start with 0 tasks -> counter shows `"0 pending tasks"`.
  2. Add `"Task 1"` -> counter updates to `"1 pending task"`.
  3. Add `"Task 2"` -> counter updates to `"2 pending tasks"`.
  4. Mark `"Task 1"` as complete -> counter updates to `"1 pending task"`.
  5. Delete `"Task 2"` -> counter updates to `"0 pending tasks"`.
  6. Revert `"Task 1"` to pending -> counter updates to `"1 pending task"`.
- **Expected Result**: The counter reflects the real-time number of tasks whose status is `"pending"`.
- **Observed Result**: Passed.

---

## Conclusion
All 8 test cases completed with zero errors and full adherence to functional requirements FR-01 through FR-07.
