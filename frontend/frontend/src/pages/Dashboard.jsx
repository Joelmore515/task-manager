import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard(){
    // Estado de la lista de tareas 
    const [task, settask] = useState([]);

    // Estado para la nueva tarea 
    const [title, setTitle]= useState([]);

    // Obtener token guardar 
    const token = localStorage.getItem("token");

    // consulto tareas al backend 
    const getTasks = async ()=>{
        try{
            const res = await axios.get("http://Localhost:3000/api/task", {
        headers:{
            Authorization:token // enviamos token
        }
    });


    // Guardamos el estado de la tarea
    settask(res.data);
    }catch(error){
        console.error("Error al obtener tareas",error);

    }
   
};

// crear una nueva tarea
const createTask = async()=>{
    try{
        await axios.post("http://localhost:3000/api/task,",
            {title},
            {headers:{Authorization:token}}
        );

        // Limpiamos los inputs 
        setTitle("");
        getTasks();
    }catch(error){
        console.error("Error al crear tareas", error);
    }
}

// se ejecuta al cargar el componente
  useEffect(()=>{
    const fechTasks = async () => {
      try{
        const res = await axios.get("http://localhost:3000/api/tasks",{
          headers:{Authorization:token}
        });

        setTasks(res.data);
      }catch(error){
        console.error("Error al obtener tareas",error);
      }
    };
    fechTasks();
  },[token]);

return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500
    to-indigo-600 flex items-center justify-center">

        <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl">

        <h1>Mis tareas</h1>
        {/input para nuevas tareas/}
        <input value = {title}
        onChange={(e) =>setTitle(e.target.value)}
        placeholder="Nueva Tareas"
        />
        {/* Boton de crear tarea*/}
        {task.map(t=>(
            <div key={t.id}>
                {t.title}
            </div>
        ))}
        </div>
    </div>
);

}

export default Dashboard;