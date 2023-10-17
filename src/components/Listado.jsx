import React from 'react'
import Style from "./Listado.module.css"
import { Items } from './Items';

const Listado = ({Listas, setListas, setEdit}) => {

  const eliminar = ({id}) => {
    setListas(Listas.filter(lista=>lista.id!==id));
  };


  return (
    <div className={Style.Listado}>
      <h1>Listado de movimientos</h1>
      <input type="search" />
      <input type="radio" value='Todos' name='todos'></input>
      <label htmlFor="todos">Todos</label>
      <input type="radio" value='Ingresos' name='ingresos'></input>
      <label htmlFor="ingresos">Ingresos</label>
      <input type="radio" value='Gastos' name='gastos'></input>
      <label htmlFor="gastos">Gastos</label>
      <br/>
      <div>
        {Listas.map((lista) => (
          <Items 
          key={lista.id} 
          lista={lista}
          eliminar = {eliminar}
          setEdit = {setEdit}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Listado;