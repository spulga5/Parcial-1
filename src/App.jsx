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
  const [editing, setEditing] = useState({ isEditing: false, id: null });

  return (
    <>
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
            editing={editing}
            setEditing={setEditing}
          />
        </div>
        <div className={style.containerChild}>
          <Listado
            transactionList={transactionList}
            setTransactionList={setTransactionList}
            setInputName={setInputName}
            setInputAmount={setInputAmount}
            setEditing={setEditing}
          />
        </div>
      </div>
    </>
  );
};

export default App;
