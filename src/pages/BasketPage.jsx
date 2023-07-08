import React from "react";
import { useSelector} from "react-redux";

const Basket = () => {

    const basket = useSelector((state) => state.products.basket);

    return (
        <div>
            <h1>Basket</h1>
            <ul>
                {basket.map((basket) => (
                    <li key={basket.id}>
                        {basket.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Basket