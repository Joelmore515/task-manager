// Importamos la parte del React Router
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Importamos nuestras paginas 
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      {/* Ruta de Login*/}
      <Route path = "/" element = {<Login/>}/>

      {/* Ruta de dashboard*/}
  
      
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;