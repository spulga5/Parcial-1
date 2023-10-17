import React from 'react'

export const Items = ({Listas, eliminar, setEdit}) => {
  return (
    <li>
        <div>
            <button onClick={()=>eliminar(Listas)}>X</button>
            <button onClick={() => setEdit(Listas)}>E</button>
        </div>
        <div>
           {Listas.title}
           {Listas.amount}
        </div>
    </li>
  );
;}

export default Items;