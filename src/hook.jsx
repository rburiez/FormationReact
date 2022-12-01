import { useEffect, useState } from "react";

export function useAccounts() {

    const [myAccounts, setMyAccounts] = useState([]);

    const callAccounts = async () => {
        let response = await fetch('http://localhost:3004/accounts');
        let data = await response.json();
        
        if(response.ok) {
            setMyAccounts(data.map(({id, name, solde, derniereOperation}) => {
                return {
                    id: id,
                    name: name,
                    solde: solde,
                    derniereOperation: Date.parse(derniereOperation)
                };
            }));
        }
        
    }

    useEffect(() => {
        callAccounts();
    }, [])
    
    return [myAccounts, setMyAccounts];

}