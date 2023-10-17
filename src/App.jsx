import { useState } from 'react'
import style from './App.module.css'
import Header from './components/Header'
import Registro from './components/Registro';
import Listado from './components/Listado';


const App = () => {
  
  const [inputName, setinputName] = useState(" ");
  const [inputCantidad, setinputCantidad] = useState(0);
  const [Listas, setListas] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [edit, setEdit] = useState(null);
  const [tipo, setTipo] = useState(" ");

  return (
    <>
    <div >
      <Header 
      saldo = {saldo}
      setSaldo = {setSaldo}
      />
    </div>
    <div className={style.container}>
      <div className={style.containerChild}>
        <Registro 
        inputName = {inputName}
        setinputName = {setinputName}
        inputCantidad = {inputCantidad}
        setinputCantidad = {setinputCantidad}
        Listas={Listas}
        setListas={setListas}
        edit = {edit}
        setEdit = {setEdit}
        tipo = {tipo}
        setTipo = {setTipo}
        />
      </div>
      <div className={style.containerChild}>
        <Listado 
        Listas={Listas}
        setListas={setListas}
        setEdit = {setEdit}
        />
      </div>
    </div>
    </>
  );
};

export default App
