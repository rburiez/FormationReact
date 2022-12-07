import { euroFormattter, dateFormatter } from '../../divers'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addSolde } from '../CompteBancaire/ListeComptesSlice'

function LigneBancaireFunc({id, name, solde, derniereOperation}) {

    const dispatch = useDispatch();


    return (<tr data-solde={solde > 200 ? "" : null}>
            <td>{name}</td> 
            <td>{euroFormattter.format(solde)}</td> 
            <td>{dateFormatter.format(derniereOperation)}</td>
            <td>
                <button onClick={() => { dispatch(addSolde({id: id, montant : 100})); }}>Ajouter 100€</button>
                {/* <button onClick={() => { handle.DetailAccount(id) }}>Afficher</button> */}
            </td>
        </tr>)

}

export const LigneBancaire = React.memo(LigneBancaireFunc);