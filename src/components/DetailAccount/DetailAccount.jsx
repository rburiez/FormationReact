import { euroFormattter, dateFormatter } from '../../divers'

export default function DetailAccount({account, handleRetour}) {

    return (<>
        <div>Id :{account.id}</div>
        <div>Nom : {account.name}</div>
        <div>Solde : {euroFormattter.format(account.solde)}</div> 
        <div>Dernière opération : {dateFormatter.format(account.derniereOperation)}</div>
        <button onClick={handleRetour}>Retour</button>
        </>
    );
}