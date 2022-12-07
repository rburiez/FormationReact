import { decrement, increment } from "./CompteurSlice";
import { useSelector, useDispatch } from 'react-redux'

export default function Compteur() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.compteur.cpt);


    return (
        <>
            <button onClick={() => { dispatch(decrement()); } } >-</button>
            <span>{count}</span>
            <button onClick={() => { dispatch(increment()); } }>+</button>
        </>
    );
}