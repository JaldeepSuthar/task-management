function DisplayData(props) {
  const { allTasks ,deleteTask,editTask } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Status</th>
            <th>Effort</th>
            <th>Assigned To</th>
          </tr>
        </thead>
        <tbody>
          {allTasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task.taskName}</td>
                <td>{task.status}</td>
                <td>{task.effort}</td>
                <td>{task.assignedTo}</td>
                <td><button onClick={() =>{ 
                    editTask(index);
                }}>Edit</button></td>
                <td><button onClick={() =>{ 
                    deleteTask(index);
                }}>delete</button></td>
              </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;
