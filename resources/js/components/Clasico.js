import { Button } from "bootstrap";
import { useState } from "react";

export const Clasico = () => {

    const [count, setCount] =useState(0);

    const incrementar = () => {
        setCount(count +1)
    }
    const decrementar = () => {
        setCount(count -1)
    }

    return (
        <div className="container">
            <h1>Componente clásico</h1>
            <h2>{count}</h2>
            <button className="btn btn-primary m-3" onClick={ incrementar }>+1</button>
            <button className="btn btn-success m-3" onClick={ decrementar }>-1</button>
        </div>
    );
}
