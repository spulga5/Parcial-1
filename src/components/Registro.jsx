import PropTypes from "prop-types";
import Style from "./Registro.module.css";
import uuid4 from "uuid4";

const Registro = (props) => {
  const { inputName, inputAmount } = props;
  const { setInputName, setInputAmount, setTransactionList } = props;

  const addItemHandler = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid4(),
      title: inputName,
      amount: inputAmount,
      completed: false,
    };
    setTransactionList((prevState) => [...prevState, newItem]);
      setInputName(" ");
      setInputCantidad();
  };

   const editar = (Listas) => {
     const newLista = Listas.map((item) =>
       item.id === Listas.id
         ? { ...Listas, title: inputName, amount: inputCantidad }
         : item
     );
     setTransactionList(newLista);
     setEdit(null);
   };

  // useEffect(() => {
  //   if (edit) {
  //     setinputName(edit.title);
  //     setinputCantidad(edit.amount);
  //   } else {
  //     setinputName(" ");
  //     setinputCantidad(0);
  //   }
  // }, [edit, setinputCantidad, setinputName]);

  return (
    <form onSubmit={addItemHandler}>
      <div className={Style.registro}>
        <h1 className={Style.titulo}>Registro</h1>
        <h3>Tipo de movimiento</h3>
        <select name="transactioType">
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Gasto</option>
        </select>
        <h3>Nombre</h3>
        <input
          name="transactionName"
          type="text"
          className={Style.nombre}
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        ></input>
        <h3>Cantidad</h3>
        <input
          name="transactionValue"
          type="number"
          className={Style.cantidad}
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
        ></input>
        <br /> <br />
        <button>Cancelar</button>
        <button type="submit" className={Style.button}>
          Agregar Movimiento
        </button>
      </div>
    </form>
  );
};

Registro.propTypes = {
  inputName: PropTypes.string.isRequired,
  setInputName: PropTypes.func.isRequired,
  inputAmount: PropTypes.number.isRequired,
  setInputAmount: PropTypes.func.isRequired,
  transactionList: PropTypes.array.isRequired,
  setTransactionList: PropTypes.func.isRequired,
};

export default Registro;
