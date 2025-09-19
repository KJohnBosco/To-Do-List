import React, {useState} from "react"

function ToDoList(){

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState("")

    function handleAddTask(){
        setTaskList(prevList => [...prevList, task])
        setTask("")
    }

    function handleRemoveTask(index){
        const newList = taskList.filter((_, idx) => idx !== index)
        setTaskList(newList)
    }

    function handleInputChange(event){
        setTask(event.target.value)
    }

    function handleMoveUp(index){
        if(index > 0){
            const newList = [...taskList];
            [newList[index], newList[index - 1]] = [newList[index - 1], [newList[index]]];
            setTaskList(newList);
        }
    }

    function handleMoveDown(index){
        if(index < taskList.length - 1){
            const newList = [...taskList];
            [newList[index], newList[index + 1]] = [newList[index + 1], [newList[index]]];
            setTaskList(newList);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>
            <input type="text" value={task} onChange={handleInputChange} placeholder="Enter new task"/>
            <button onClick={handleAddTask} className="add-button">Add</button>
            <ol>
                {taskList.map((task, index) => <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => handleRemoveTask(index)}>🥫</button>
                    <button className="MUp-button" onClick={() => handleMoveUp(index)}>👆</button>
                    <button className="MDown-button" onClick={() => handleMoveDown(index)}>👇</button>
                </li>)}
            </ol>
        </div>
    );


}

export default ToDoList