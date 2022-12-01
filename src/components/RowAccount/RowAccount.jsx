import { euroFormattter, dateFormatter } from '../../divers'
import React from 'react'
import { useSelector } from 'react-redux'

function RowAccountFunc({id, name, solde, derniereOperation, handle}) {

    const count = useSelector((state) => state.compteur.cpt);


    return (<tr data-solde={solde > 200 ? "" : null}>
            <td>{name}</td> 
            <td>{euroFormattter.format(solde)}</td> 
            <td>{dateFormatter.format(derniereOperation)}</td>
            <td>
                <button onClick={() => { handle.AddSolde(id) }}>Ajouter 10€</button>
                <button onClick={() => { handle.DetailAccount(id) }}>Afficher</button>
                <span>{count}</span>
            </td>
        </tr>)

}

export const RowAccount = React.memo(RowAccountFunc);