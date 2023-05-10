import Menu from './components/Menu/Index';
import Home from './components/Home'
import Sobre from './components/Sobre'
import Servico from './components/Servico/Index';
import Contato from './components/Contato'
import { BrowserRouter as Navegador, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <>
            <Navegador>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/servico" element={<Servico/>} />
                    <Route path="/sobre" element={<Sobre/>} />
                    <Route path="/contato" element={<Contato/>} />
                </Routes>
            </Navegador>
        </>
    )
}
export default App;