import { euroFormattter, dateFormatter } from '../../divers'
import React from 'react'

function RowAccountFunc({id, name, solde, derniereOperation}) {


    return (<tr data-solde={solde > 200 ? "" : null}>
            <td>{name}</td> 
            <td>{euroFormattter.format(solde)}</td> 
            <td>{dateFormatter.format(derniereOperation)}</td>
            <td>
                <button onClick={() => { handleAddSolde(id) }}>Ajouter 10€</button>
                <button onClick={() => { handleDetailAccount(id) }}>Afficher</button>
            </td>
        </tr>)

}


export const RowAccount = React.memo(RowAccountFunc);