import { HashRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import Atualizar from "./Pages/Atualizar"
import Contrato from "./Pages/Contrato"
import AllContracts from "./Pages/AllContracts"
import Home from "./Pages/Home"

function App() {
 

  return (

    <>
    <GlobalStyle />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/atualizar" element={<Atualizar/>}/>
        <Route path="/form" element={<Contrato/>}/>
        <Route path="/allcontracts" element={<AllContracts/>}/>
      </Routes>
    </HashRouter>
    </>
    
  )
}

export default App
