import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";


export const addNoteAsync = createAsyncThunk('note/addNoteAsnyc', async (note) => {

        await localStorage.setItem('notes', JSON.stringify(note))
    
})

export const noteSlice = createSlice({
    name: "note",
    initialState: {
        notes: [
            {
                id: nanoid(),
                note: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            },
            {
                id: nanoid(),
                note: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            },
            {
                id: nanoid(),
                note: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
            },
        ],
        activeFilter: localStorage.getItem("activeNotes")
    },
    reducers: {
        changeActivefilter: (state, action) => {

            state.activeFilter = action.payload;
        },

    },
    extraReducers(builder) {
        builder
            .addCase(addNoteAsync.fulfilled, (state, action) => {
                state.item.push(action.payload);
            })

    },
});

export const { changeActivefilter } = noteSlice.actions;
export default noteSlice.reducer;