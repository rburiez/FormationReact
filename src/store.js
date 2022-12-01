import { configureStore } from '@reduxjs/toolkit'
import compteurReducer  from './components/Compteur/CompteurSlice'

export const store = configureStore({
  reducer: {
    compteur: compteurReducer
  }
})