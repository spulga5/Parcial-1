import Style from "./Listado.module.css";
import PropTypes from "prop-types";

const Listado = (props) => {
  const { transactionList } = props;

  // const eliminar = ({ id }) => {
  //   setTransactionList(Listas.filter((lista) => lista.id !== id));
  // };

  return (
    <div className={Style.Listado}>
      <h1>Listado de movimientos</h1>
      <input type="search" />
      <input type="radio" value="Todos" name="todos"></input>
      <label htmlFor="todos">Todos</label>
      <input type="radio" value="Ingresos" name="ingresos"></input>
      <label htmlFor="ingresos">Ingresos</label>
      <input type="radio" value="Gastos" name="gastos"></input>
      <label htmlFor="gastos">Gastos</label>
      <br />
      <div>
        {transactionList.map((transaction, index) => (
          <li key={`transaction${index}`}>
            <div>
              <button onClick={() => {}}>❌</button>
              <button onClick={() => {}}>✎</button>
            </div>
            <div>
              {transaction.title}
              {transaction.amount}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

Listado.propTypes = {
  transactionList: PropTypes.array,
  setTransactionList: PropTypes.func,
};

export default Listado;
