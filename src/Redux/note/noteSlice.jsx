import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

//get data
export const getLocalStorge = () => {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : []
};
//add data 
export const setLocalStorage = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
};


export const noteSlice = createSlice({
    name: "notes",
    initialState: {
        notes: [...getLocalStorge()],
        isLoading: false,
        error: null,
        activeColor: "blue",
        currentNote: null,
        filtered: "",

    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.notes.unshift(action.payload);
                localStorage.setItem("notes", JSON.stringify(state.notes));
            },
            prepare: (notes, activeColor) => {
                return {
                    payload: {
                        id: nanoid(),
                        note: notes,
                        color: activeColor,
                    },
                };
            }

        },

        changeActiveColor: (state, action) => {
            state.activeColor = action.payload;
        },
        onClickNote: (state, action) => {
            state.currentNote = action.payload;
        },
        edit: (state, action) => {
            state.notes.find((item) =>
                item.id === state.currentNote.id ? (item.note = action.payload) : ""
            );
            setLocalStorage(state.notes);
        },
        deleteNote: (state) => {
            state.notes = state.notes.filter(
                (item) => item.id !== state.currentNote.id
            );
            setLocalStorage(state.notes);
        },
        search: (state, action) => {
            state.filtered = action.payload;
        },

    },

});



export const {search,deleteNote,edit,onClickNote,addNote, changeActiveColor } = noteSlice.actions;
export default noteSlice.reducer;