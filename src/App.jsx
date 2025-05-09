import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'bootstrap'



import Buttons from './components/buttons/button'
import Menu from './components/menu'
import Card from './components/card'
import Input from './components/input/input'
import Modal from './components/modal'
import Footer from './components/footer'
import Input2 from './components/input/input2'
import InputFloating from './components/input/inputFloating'


function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    alert('Botão clicado!');
  };
  const email_enviado = () => {
    alert('E-mail enviado com sucesso!');
  }
  const [nome, setNome] = useState("")

  return (
    <>
      {/* <Buttons variant = "btn btn-primary" valor="Incluir" />
      <Buttons variant = "btn btn-danger" valor="Excluir" />
      <Buttons variant = "btn btn-dark" valor="Clique aqui" acao={handleClick} /> */}

      {/* Menu */}
      <Menu />

      {/* Container Principal */}
      <div className="row justify-content-center align-items-center mb-5">
        {/* Card */}
        <div className="row mb-5">
          <div className="col-12 col-md-12">
            <Card />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="row text-center mb-5">
          <h3 className="mb-4">Quer receber nossa NewsLetter?</h3>
          <div className="col-12 col-md-6 mx-auto">
          <div className="mb-3">
            <Input />
            <Input2 id ="idNome" placeholder="Digite seu nome" valor={nome} onChange={(e)=>(setNome(e.target.value))}/>
            <p>Olá {nome}</p>
            <InputFloating id="floatingInput" textoLabel="Digite seu e-mail" />
          </div>
            <Buttons variant = "btn btn-light" valor="Enviar" acao={email_enviado} />
          </div>
        </div>

        {/* Modal */}
        <div className="row text-center mb-5">
          <div className="col-12">
            <Modal />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      
    </>
  )
}

export default App