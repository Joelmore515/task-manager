import { useState } from "react";

// Libreria para hacer peticiones http 
import axios from "axios";

// hook para redireccionar 
import { useNavigate } from "react-router-dom";

function Login(){

    // Guardar estados
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Para redirreccionar a otra pagina 
    const navigate = useNavigate();
    
    const login = async()=>{
        try{
            const res = await axios.post("http://localhost:3000/api/login",
                {
                    email, password
                });

                // Guardar el token localstorage
                localStorage.setItem("token", res.data.Token);
                // redireccionamos al dashboard 
                navigate("/dashboard");
        }catch(error){
            console.error("Error en el login", error);
            alert("Credenciales incorrectas");
        }    
    };

    return (
        <div className="min-h-screen flex items-center justify bg-gradient-to-br 
        from-blue-500 to-indig0-600">

            <div className="bg-white p-8 rounded-2-1 shadow w-full max-w-md"/>
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Iniciar sesion
            </h1>

            <input onChange={(e)=>setEmail(e.target.value)} 
            placeholder="Email"
            className="w-full border border-gray-300 p-3 roundend-lg 
            focus:outline-none focus-ring-2 focus-ring-blue-400"
            type="email"/>
            
            <input onChange={(e)=>setPassword(e.target.value)} 
            placeholder="Pasword"
            className="w-full border border-gray-300 p-3 roundend-lg 
            focus:outline-none focus-ring-2 focus-ring-blue-400"
            type="password"/>

            <button onClick={login}
            className="w-full mt-6 bg-blue-500 text-white p-3 rounded-lg 
            hover:bg-blue-600 transition"
            >Ingresar</button>
        </div>
    );
}
export default Login;