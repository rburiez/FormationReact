import { LigneBancaire } from '../LigneBancaire/LigneBancaire';
import { useSelector, useDispatch } from 'react-redux';
import { featchAccountApi } from './ListeComptesSlice';
import './ListeComptes.css';
import { useEffect } from 'react';



export default function ListeComptes() {
   
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(featchAccountApi());
    }, []);

    const accounts = useSelector((state) => state.comptes.accounts);

    //Création des lignes du tableau
    const affichage = accounts.map(({id, name, solde, derniereOperation}) => {
        return <LigneBancaire key={id} id={id} name={name} solde={solde} derniereOperation={derniereOperation} />
    });

    //Retour de la structure complète
    return (<>
        
        {/* <button onClick={handleAddAccount}>Ajouter un compte</button> */}
        <table className="table">
            <thead>
                <tr>
                    <td>Nom </td>
                    <td>Solde</td>
                    <td>Date de dernière opération</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {affichage}
            </tbody>
        </table>
    </>);
}