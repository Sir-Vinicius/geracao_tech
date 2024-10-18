// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import NavbarComponent from './components/Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// import Saudacao from './components/Saudacao/Saudacao';
// import BotaoDinamico from './components/BotaoDinamico/BotaoDinamico';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';

// const saldo = 10
// const saldo2 = 12

function App() {

  return (
    <>
      <Router>
        <div>
          <Header/>
          <Routes>
            <Route path='/home' element={<HomePage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='*' element={<HomePage/>}></Route>
            {/* Garante que outras rotas não rastreadas retornem para Home */}
          </Routes>
        </div>
      </Router>

      {/* '<Header></Header>
      '<Saudacao nome="Fulano" saldo={saldo}></Saudacao>
      '<Saudacao nome="Fulana" saldo={saldo2}></Saudacao>
      <BotaoDinamico cor='blue'>Botão Azul</BotaoDinamico>
      <BotaoDinamico cor='red'>Botão Vermelho</BotaoDinamico>
      <div>
        <NavbarComponent></NavbarComponent>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button> count is 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
