import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";


export const addNoteAsync = createAsyncThunk('note/addNoteAsnyc', async (input) => {
        const dataControl = JSON.parse(localStorage.getItem('notes'))
        await localStorage.setItem('notes', JSON.stringify([...dataControl,input]))
    
})

export const noteSlice = createSlice({
    name: "note",
    initialState: {
        note:localStorage.setItem('notes',JSON.stringify([
            {
                id: nanoid(),
                note: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                color:"green"
            },
            {
                id: nanoid(),
                note: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                color:"red"
            },
            {
                id: nanoid(),
                note: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
                color:"blue"

            },
        ])),
        activeFilter: localStorage.getItem("activeNotes"),
        activeColor:"blue"

    },
    reducers: {
        changeActivefilter: (state, action) => {

            state.activeFilter = action.payload;
        },
        changeActiveColor: (state, action) => {
            state.activeColor = action.payload;
          },

    },
    extraReducers(builder) {
        builder
            .addCase(addNoteAsync.fulfilled, (state, action) => {
                state.item=action.payload;
            })

    },
});

export const { changeActivefilter, changeActiveColor } = noteSlice.actions;
export default noteSlice.reducer;