import React, {useState} from 'react';
import CreateTask from '../modals/createTask';

const TodoList = () => {

    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    
    return (
        <>
           <div className="header text-center">
              <h3>Agenda Personal</h3>
              <button className="btn btn-primary mt-2" onClick = {() => setModal(true)}>Crear tarea</button>
           </div>
           <div className="task-container">
                
           </div>
           <CreateTask toggle={toggle} modal={modal} />
        </>
    );
};

export default TodoList;