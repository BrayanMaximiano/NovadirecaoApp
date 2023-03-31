import { HashRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import Atualizar from "./Pages/Atualizar"
import Contrato from "./Pages/Contrato"
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
      </Routes>
    </HashRouter>
    </>
    
  )
}

export default App
