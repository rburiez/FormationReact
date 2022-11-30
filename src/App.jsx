import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import AccountList from './components/AccountList/AccountList'
import DetailAccount from './components/DetailAccount/DetailAccount'
import { CompareString } from './divers'


export default function App() {

 const [myEtatsTri, setEtats] = useState([
    {
      type: 'name',
      order: false
    },
    {
      type: 'solde',
      order: false
    },
    {
      type: 'derniereOperation',
      order: false
    }
 ]);

  const [currentAccount, setDisplay] = useState(null);
  const [myAccounts, setMyAccounts] = useState([
    {
      id:1,
      name: "Rémi",
      solde: 500,
      derniereOperation : Date.parse("2022-10-22")
    },
    {
      id:2,
      name: "Eliot",
      solde: 100,
      derniereOperation : Date.parse("2022-09-12")
    },
    {
      id:3,
      name: "Nedjma",
      solde: 150,
      derniereOperation : Date.parse("2022-11-02")
    },
    {
      id:4,
      name: "Laurent",
      solde: 1300,
      derniereOperation : Date.parse("2022-10-23")
    }
  ]);
  
  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <Header finH1='les copains'>
        <h4>Ceci est une formation</h4>
      </Header> */}

      <h2>Etat des finances</h2>
      {!currentAccount ?
        <AccountList accounts={myAccounts} etatsTri={myEtatsTri} handleAddSolde={(id) => {AddSolde(id, 10)}} handleSort={(typeTri) => {SortTable(typeTri)}} handleAddAccount={AddRow} handleDetailAccount={(id) => {DisplayAccount(id)}} /> :
        <DetailAccount account={currentAccount} handleRetour={DisplayTableau} />  
      }
      
    </div> 
  )

  function AddSolde(id, montant) {
    myAccounts.find(a => a.id == id).solde += montant;
    setMyAccounts([...myAccounts]); //[...myAccounts] => Permet de cloner le tableau. Indispensable car sinon React ne fait pas de mise à jour pour les mofifications par référence
  }

  function SortTable(typeTri) {
     
    var ordreTri = myEtatsTri.find(x => x.type == typeTri);

    var newtab = [];
    switch(ordreTri.type) {
        case "name":
          newtab = ordreTri.order ? myAccounts.sort((premier, second) => { return CompareString(premier.name, second.name) }) : myAccounts.sort((premier, second) => { return CompareString(second.name, premier.name) });
        break;
        case "solde":
          newtab = ordreTri.order ? myAccounts.sort((premier, second) => premier.solde - second.solde) : myAccounts.sort((premier, second) => second.solde - premier.solde);
        break;
        case "derniereOperation":
          newtab = ordreTri.order ? myAccounts.sort((premier, second) => premier.derniereOperation - second.derniereOperation) : myAccounts.sort((premier, second) => second.derniereOperation - premier.derniereOperation);
        break;
    }

    ordreTri.order = !ordreTri.order;

    setEtats([...myEtatsTri]);
    setMyAccounts([...newtab]);
  }

  function AddRow() {
    if(myAccounts.findIndex(x => x.id == 5) < 0) {
      var newtab = [...myAccounts, {
        id:5,
        name: "Emmanuel",
        solde: 5000,
        derniereOperation : Date.parse("2021-01-25")
      }];
 
      setMyAccounts(newtab);
    } 
  }

  function DisplayAccount(id) {
    const acc = myAccounts.find(a => a.id == id); 
    setDisplay(acc);
  }
  
  function DisplayTableau() {
    setDisplay(null);
  }

}



