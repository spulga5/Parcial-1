import { useState } from "react";
import style from "./App.module.css";
import Header from "./components/Header";
import Registro from "./components/Registro";
import Listado from "./components/Listado";

const App = () => {
  const [inputName, setInputName] = useState(" ");
  const [inputAmount, setInputAmount] = useState(0);
  const [transactionList, setTransactionList] = useState([]);
  const [balance, setBalance] = useState(0);
  const [edit, setEdit] = useState(null);
  const [tipo, setTipo] = useState(" ");
  const [saldo, setSaldo] = useState(0);

  return (
    <>
    <div>
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
    </div>
      <div>
        <Header alance={balance} setBalance={setBalance} />
      </div>
      <div className={style.container}>
        <div className={style.containerChild}>
          <Registro
            inputName={inputName}
            setInputName={setInputName}
            inputAmount={inputAmount}
            setInputAmount={setInputAmount}
            transactionList={transactionList}
            setTransactionList={setTransactionList}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
        <div className={style.containerChild}>
          <Listado
            transactionList={transactionList}
            setTransactionList={setTransactionList}
            setEdit={setEdit}
          />
          </div>
      </div>
    </>
  );
};

export default App;
