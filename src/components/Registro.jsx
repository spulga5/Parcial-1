import PropTypes from "prop-types";
import Style from "./Registro.module.css";
import uuid4 from "uuid4";

const Registro = (props) => {
  const { inputName, inputAmount, editing, setEditing } = props;
  const { setInputName, setInputAmount } = props;
  const { transactionList, setTransactionList } = props;

  const { id: editingId, isEditing } = editing;

  const resetFormValues = () => {
    setInputName("");
    setInputAmount(0);
  };

  const addItemHandler = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid4(),
      title: inputName,
      amount: inputAmount,
      completed: false,
    };
    setTransactionList((prevState) => [...prevState, newItem]);
    resetFormValues();
  };

  const editHandler = (e) => {
    e.preventDefault();
    const newList = transactionList.map((item) =>
      editingId === item.id
        ? { ...item, title: inputName, amount: inputAmount }
        : item
    );
    setTransactionList(newList);
    setEditing({ id: null, isEditing: false });
    resetFormValues();
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
    <form onSubmit={isEditing ? editHandler : addItemHandler}>
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
          {isEditing ? "Editar" : "Agregar"} Movimiento
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
  editing: PropTypes.obj,
  setEditing: PropTypes.func,
};

export default Registro;
