import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';


const initialState = {
    accounts: []
};

export const featchAccountApi = createAsyncThunk('accounts/getall',  
    async () => {
        
        let response = await fetch('http://localhost:3004/accounts');

        if(response.ok) {
            let data = await response.json();
            return data.map(({id, name, solde, derniereOperation}) => {
              return {
                  id: id,
                  name: name,
                  solde: solde,
                  derniereOperation: Date.parse(derniereOperation)
              }
            });
        }
    } 
);


const actionAddSolde = createAction('accounts/addSolde');
export const accountSlice = createSlice({
  name: 'listecompte',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(featchAccountApi.fulfilled, (state, action) => {
        state.accounts = action.payload;
    });
    // builder.addCase(actionAddSolde, (state, payload) => {
    //   console.log(state.accounts);
    // });
    
    // builder.addCase(featchAccountApi.pending, (state, action) => {
    //   state.accounts = action.payload;
    // });
    // builder.addCase(featchAccountApi.rejected, (state, action) => {
    //   state.accounts = action.payload;
    // });
  }
});



export const { addSolde } = accountSlice.actions

export default accountSlice.reducer

