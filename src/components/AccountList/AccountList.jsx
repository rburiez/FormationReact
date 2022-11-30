import './AccountList.css';
import { RowAccount } from '../RowAccount/RowAccount';


export default function AccountList({accounts, etatsTri, handleAddSolde, handleSort, handleAddAccount, handleDetailAccount}) {


    const handle = {
        AddSolde: handleAddSolde,
        DetailAccount: handleDetailAccount
    };
    
    //Création des lignes du tableau
    const affichage = accounts.map(({id, name, solde, derniereOperation}) => {
        return <RowAccount key={id} id={id} name={name} solde={solde} derniereOperation={derniereOperation} handle={handle} />
    });

    //Retour de la structure complète
    return (<>
        
        <button onClick={handleAddAccount}>Ajouter un compte</button>
        <table className="table">
            <thead>
                <tr>
                    <td data-type="name" onClick={() => { handleSort("name") }}>{GetFleche("name") ? <i>&uarr;</i> : <i>&darr;</i>}Nom </td>
                    <td data-type="solde" onClick={() => { handleSort("solde") }}>{GetFleche("solde") ? <i>&uarr;</i> : <i>&darr;</i>} Solde</td>
                    <td data-type="name" onClick={() => { handleSort("derniereOperation") }}>{GetFleche("derniereOperation") ? <i>&uarr;</i> : <i>&darr;</i>} Date de dernière opération</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {affichage}
            </tbody>
        </table>
    </>);

    function GetFleche(typeElement) {
        return etatsTri.find(x => x.type == typeElement).order;
    } 
}