import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {GATOAPI} from '../constants/api';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');


    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }

    const random = async function  () {
        let log = await GATOAPI.get("fact");
        setDescription(log.data.fact)
        return await GATOAPI.get("fact");
    } 

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Status"] = "Pendiente"
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Tarea</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Titulo</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Descripcion</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={handleSave}>Crear</Button>
                <Button color="primary" onClick={() => random()}>frase aleatoria</Button>
                <Button color="danger" onClick={toggle}>Cancelar</Button>
                
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskPopup;