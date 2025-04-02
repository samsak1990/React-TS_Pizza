import React, { FC, useState } from "react";
import { Edit, Trash2 } from "react-feather";
import Pizza from "../models/Pizza";
import EditPizzaForm from "./EditPizzaForm";
import {Link} from 'react-router-dom'

interface ISinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizza: FC<ISinglePizzaProps> = ({
  pizza,
  updatePizza,
  deletePizza,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="pizza">
      <img src={`../images/${pizza.img}`} alt={pizza.title} />
      <h2>
        <Link to={`/pizza/${pizza.id}`}>{pizza.title}</Link>
      </h2>
      <span>{pizza.price} руб.</span>

      <div className="pizza-controls">
        <Edit onClick={handleToggleEdit} />
        <Trash2 onClick={() => deletePizza(pizza.id)} />
      </div>

      {edit && (
        <EditPizzaForm
          data={pizza}
          updatePizza={updatePizza}
          handleToggleEdit={handleToggleEdit}
        />
      )}
    </div>
  );
};

export default SinglePizza;
