import { useEffect, useState } from 'react'

import './App.css'
import { Form } from './componentes/Form'
import { Etapas } from './componentes/Etapas'

export const App = () => {
  const [dataForm, setDataForm] = useState({
    name: "Nossa receita",
    autor: "Felipe Moreira",
    tipo: "salgado",
    etapas: []
  })

  function handleSubmit(e) {
    e.preventDefault();
    console.log("AQUI ESTAO OS DADOS ATUALIZADOS", dataForm)
  }
  
  return (
    <>
    <h1>{dataForm.name}</h1>
    <Form 
     onSubmit={handleSubmit}
     adicionarDadosNoDataForm={setDataForm}
     dataFormulario={dataForm}
     />
    </>
  )
}
  