import { useState } from 'react'
import './App.css'
import { CompareString } from './divers'
import Compteur from './components/Compteur/Compteur'
import ListeComptes from './components/CompteBancaire/ListeComptes'


export default function App() {


  return (
    <div className="App">

      <h2>Etat des finances</h2>

      <ListeComptes />
      <Compteur />

    </div> 
  )


}



