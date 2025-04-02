import React, {FC, useEffect, useState } from "react";
import Pizza from '../models/Pizza'
import { useParams } from "react-router-dom";

const PizzaF: FC = ()=>{
    const [pizza, setPizza] = useState<Pizza | null>(null)
    const {id} = useParams()

    useEffect(()=>{
        const pizzasState = localStorage.getItem('pizzasState')
        if(pizzasState && id){
            const pizzasList = JSON.parse(pizzasState)
            const currentPizza = pizzasList.find((pizza: Pizza) => {
                return pizza.id === +id
            })
            console.log(currentPizza)
            setPizza(currentPizza)
        }
    }, [])

    return(
        <>
            <span className="heading">Ваша пицца</span>
            <div className="pizza pizza-page">
                <img src={`../images/${pizza?.img}`} alt={pizza?.title} />
                <h2>{pizza?.title}</h2>
                <span>{pizza?.price} руб.</span>
                <p>Лучшая в городе!</p>
            </div>
        </>
    )
}

export default PizzaF