import { decrement, increment } from "./CompteurSlice";
import { useSelector, useDispatch } from 'react-redux'

export default function Compteur() {
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => { dispatch(decrement()); } } >-</button>
            <button onClick={() => { dispatch(increment()); } }>+</button>
        </>
    );
}