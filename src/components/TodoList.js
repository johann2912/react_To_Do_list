import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/createTask';
import Card from './Card';



const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [buscador,setBuscador] = useState([])

    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    
    const handleChange = (e) => {
        
        const {value} = e.target

         setBuscador(value)
       
    }


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }
        
    

    return (
        <>
            <div className = "header text-center">
                <h3>Todo List</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Crear tarea</button><br/>
                <input type="text" class="barra mt-3 border-aqua" placeholder="Buscar" value = {buscador} onChange = {handleChange} name = "buscador" />
            </div>
            <div className = "task-container">
            {taskList && taskList.filter(task => task.Description.includes(buscador)).map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default TodoList;