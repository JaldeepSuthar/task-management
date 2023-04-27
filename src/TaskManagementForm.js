function TaskManagementForm(props) {
  const { taskData, setTaskData, handleFormSubmit } = props;
  const onSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Task Name</label>
        <input
          type="text"
          value={taskData.taskName}
          onChange={(e) => {
            setTaskData({ ...taskData, taskName: e.target.value });
          }}
        />
        <label>Status</label>

        <select
          name="status"
          id="status"
          value={taskData.status}
          onChange={(e) => {
            setTaskData({ ...taskData, status: e.target.value });
          }}
        >
          <option value="open">open</option>
          <option value="In progress">In progress</option>
          <option value="Test">Test</option>
          <option value="Close">Close</option>
        </select>
        <label>Efforts</label>
        <input
          type="number"
          value={taskData.effort}
          onChange={(e) => {
            setTaskData({ ...taskData, effort: e.target.value });
          }}
        />
        <label>Assigned To</label>
        <input
          type="text"
          value={taskData.assignedTo}
          onChange={(e) => {
            setTaskData({ ...taskData, assignedTo: e.target.value });
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default TaskManagementForm;
