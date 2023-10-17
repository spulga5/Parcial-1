import React, {useState,useEffect} from 'react'
import Style from "./Registro.module.css"
import uuid4 from "uuid4"
const Registro = ({inputName, setinputName, inputCantidad, setinputCantidad, Listas, setListas, edit, setEdit}) => {
  
  const agregar = (e) => {
    e.preventDefault();
    if (edit){
      editar(edit);
    }
    else {
      const newLista = {
        id: uuid4(),
        title: inputName,
        amount: inputCantidad,
        completed: false,
    };
    setListas([...Listas, newLista]);
    setinputName(" ");
    setinputCantidad( );}
  };
  const editar = (Listas) => {
    const newLista = Listas.map((item) => 
    item.id === Listas.id ? {...Listas, title: inputName, amount: inputCantidad} : item
    );
    setListas(newLista);
    setEdit(null);
  } 
  
  useEffect(() => {
    if (edit) {
      setinputName(edit.title);
      setinputCantidad(edit.amount);
    } else {
      setinputName(" ");
      setinputCantidad(0);
    }
  }, [edit])
  

  return (
    <form onSubmit={agregar}>
      <div className={Style.registro}>
        <h1 className={Style.titulo}>Registro</h1>
        <h3>Tipo de movimiento</h3>
        <select name="transactioType" >
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Gasto</option>
        </select>
        <h3>Nombre</h3>
        <input 
          name='transactionName' 
          type='text' 
          className={Style.nombre}
          value={inputName}
          onChange={(e) => setinputName(e.target.value)}
          ></input>
        <h3>Cantidad</h3>
        <input 
          name='transactionValue'
          type='number'
          className={Style.cantidad}
          value={inputCantidad}
          onChange={(e) => setinputCantidad(e.target.value)}
        ></input>
        <br /> <br />
        <button>Cancelar</button>
        <button type='submit' className={Style.button}> {edit ? "Editar": "Agregar Movimiento"}</button>
      </div>
    </form>
  );
};

export default Registro;
