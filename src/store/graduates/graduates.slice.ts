import { createSlice } from '@reduxjs/toolkit';

export interface Graduate {
    id: string;
    name: string;
}

export interface Career {
    id: string;
    name: string;
    graduates: Graduate[];
}

interface GraduatesState {
    careers: {
        isc: Career;
    };
}

const initialState: GraduatesState = {
    careers: {
        isc: {
            id: 'isc',
            name: 'Ingeniería en Sistemas Computacionales',
            graduates: []
        }
    }
};

const graduatesSlice = createSlice({
    name: 'graduates',
    initialState,
    reducers: {
        // Reducers for potential runtime modifications (adding, updating if needed)
    }
});

export default graduatesSlice.reducer;
