import { configureStore } from '@reduxjs/toolkit'
import compteurReducer  from './components/Compteur/CompteurSlice'
import listeCompteReducer from './components/CompteBancaire/ListeComptesSlice'

export const store = configureStore({
  reducer: {
    compteur: compteurReducer,
    comptes: listeCompteReducer
  }
})