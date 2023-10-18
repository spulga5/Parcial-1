import PropTypes from "prop-types";
import Style from "./Header.module.css";

const Header = (props) => {
  const { setBalance } = props;

  let saldoFinal = (e) => {
    e.preventDefault();
    saldoFinal = setBalance(e.target.value);
  };

  return (
    <div className={Style.encabezado}>
      <h1> Taller 1 </h1>
      <div className={Style.ingreso}>
        <h3>Saldo Inicial</h3>
        <input
          type="number"
          onChange={(e) => setBalance(e.target.value)}
        ></input>
      </div>
      <div className={Style.final}>
        <h3>Saldo Final</h3>
        <input type="number" onChange={() => saldoFinal()} readOnly></input>
      </div>
    </div>
  );
};

Header.propTypes = {
  balance: PropTypes.number,
  setBalance: PropTypes.func,
};

export default Header;
