import react, {useState} from 'react';
import Style from "./Header.module.css";


const Header = ({saldo, setSaldo}) => {

  let saldoFinal = (e) => {
    e.preventDefault();
    saldoFinal=setSaldo(e.target.value);
  }

  return (
    <div className={Style.encabezado}>
        <h1 > Taller 1 </h1>
        <div className={Style.ingreso}>
          <h3 >Saldo Inicial</h3>
          <input type="number" onChange={(e) => setSaldo(e.target.value)}></input>
        </div>
        <div className={Style.final}>
          <h3>Saldo Final</h3>
          <input type="number" onChange={(e) => saldoFinal()} readOnly></input>
        </div>
        
    </div>
  );
};

export default Header;
