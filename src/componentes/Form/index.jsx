import React from "react";
import { useState } from "react";
import { Etapas } from "../Etapas";

export const Form = (props) => {
  const [dataInput, setDataInput] = useState("");

  const adicionarEtapa = () => {
    if (!dataInput) {
      alert("Preencher etapa e obrigatório");
      return;
    }
    props.dataFormulario;
    const newData = props.dataFormulario.etapas;
    newData.push({
      id: `${newData.length + 1}`,
      name: `Etapa ${newData.length + 1}`,
      description: dataInput,
    });
    console.log(props.dataFormulario);
    props.adicionarDadosNoDataForm({
      ...props.dataFormulario,
      etapas: newData,
    });
  };

  return (
    <>
      <form onSubmit={props.onSubmit}>
        <div>
          <label htmlFor="etapa" />
          <input
            htmlFor="etapa"
            type="text"
            onChange={(e) => {
              setDataInput(e.target.value);
            }}
          />
        </div>
        <button type="button" onClick={adicionarEtapa}>
          Adiciona Etapa
        </button>
        <Etapas data={props.dataFormulario} />
        <button type="submit">Salvar Receita </button>
      </form>
    </>
  );
};
