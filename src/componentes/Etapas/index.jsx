import React from "react";
import "./style.css";

export const Etapas = (props) => {
  return (
    <>
      <div className="box-etapas">
        {props.data.etapas.length > 0 ? (
          props.data.etapas.map((item) => {
            return (
              <div key={item.id} className="card-description">
                <h2 className="title-card">{item.name}</h2>
                <p className="description-card">{item.description}</p>
              </div>
            );
          })
        ) : (
          <p>Adicione uma etapa a sua receita</p>
        )}
      </div>
    </>
  );
};
