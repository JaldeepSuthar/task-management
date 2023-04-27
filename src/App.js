import "./App.css";
import TaskManagementForm from "./TaskManagementForm";
import DisplayData from "./displayData";

import { useState } from "react";

function App() {
  const [taskData, setTaskData] = useState({
    taskName: "",
    status: "open",
    effort: 0,
    assignedTo: "",
  });
  const [allTasks, setAllTasks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleFormSubmit = () => {
    const newAllTasks = [...allTasks];
    //selectedIndex = (-1) {add data} else {update data}
    if(selectedIndex === -1){
      newAllTasks.push(taskData);
    }else{
         newAllTasks[selectedIndex] = taskData;
         setSelectedIndex(-1);
    }
    
    setAllTasks(newAllTasks);
    console.log(allTasks);
    setTaskData({
      taskName: "",
      status: "open",
      effort: 0,
      assignedTo: "",
    });
    
  };
  const editTask = (index) => {
    const newEditData = allTasks[index];
    console.log(newEditData);
    setTaskData(newEditData);
    setSelectedIndex(index);
  };
  const deleteTask = (index) => {
    const newDeletedTask = [...allTasks];
    newDeletedTask.splice(index, 1);
    setAllTasks(newDeletedTask);
    console.log(allTasks);
  };
  return (
    <div className="App">
      <TaskManagementForm
        taskData={taskData}
        setTaskData={setTaskData}
        handleFormSubmit={handleFormSubmit}
      />
      <DisplayData
        allTasks={allTasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
