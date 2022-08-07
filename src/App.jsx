import {Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Tareas from './Pages/Tareas';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/tareas" element={<Tareas/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
