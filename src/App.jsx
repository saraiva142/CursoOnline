import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'bootstrap'



import Buttons from './components/buttons/button'
import Menu from './components/menu'
import Card from './components/card'
import Input from './components/input'


function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    alert('Botão clicado!');
  };

  return (
    <>

      <Menu />

      {/* <Buttons variant = "btn btn-primary" valor="Incluir" />
      <Buttons variant = "btn btn-danger" valor="Excluir" />
      <Buttons variant = "btn btn-dark" valor="Clique aqui" acao={handleClick} /> */}

     <Card />

    <h3>Quer receber nossa NewsLetter ?</h3>
     <Input />
      
    </>
  )
}

export default App