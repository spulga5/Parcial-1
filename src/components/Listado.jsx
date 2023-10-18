import Style from "./Listado.module.css";
import PropTypes from "prop-types";

const Listado = (props) => {
  const { transactionList, setTransactionList, setInputName } = props;
  const { setInputAmount, setEditing } = props;

  const deleteHandler = (transaction) => {
    const { id } = transaction;
    const newList = transactionList.filter((item) => item.id !== id);
    setTransactionList(newList);
  };

  const editHandler = (transaction) => {
    const { id, title, amount } = transaction;
    setInputName(title);
    setInputAmount(amount);
    setEditing({ id, isEditing: true });
  };

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
      <ol style={{ listStyle: "none", padding: 0 }}>
        {transactionList.map((transaction) => (
          <li key={transaction.id} style={{ border: "1px solid #a1f3f9" }}>
            <div>
              <button onClick={() => deleteHandler(transaction)}>❌</button>
              <button onClick={() => editHandler(transaction)}>✎</button>
            </div>
            <div>
              <p>{transaction.title}</p>
              <p>{transaction.amount}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

Listado.propTypes = {
  transactionList: PropTypes.array,
  setTransactionList: PropTypes.func,
  setInputName: PropTypes.func,
  setInputAmount: PropTypes.func,
  setEditing: PropTypes.func,
};

export default Listado;
