import { createSlice } from '@reduxjs/toolkit'

import { getAll, getById, create, update, deleteById } from '../actions/libros'

const initialState = {
  libros: [],
  libro: {},
  cargando: null,
}

const librosSlice = createSlice({
  name: 'libros',
  initialState,
  reducers: {
    cambiarCargando: (state) => {
      state.cargando = !state.cargando
    },
  },
  extraReducers: {
    //getAll
    [getAll.pending]: (state) => {
      state.cargando = true
    },
    [getAll.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.libros = payload.libros
    },
    [getAll.rejected]: (state) => {
      state.cargando = true
    },
    //getById
    [getById.pending]: (state) => {
      state.cargando = true
    },
    [getById.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.libro = payload.libro
    },
    [getById.rejected]: (state) => {
      state.cargando = true
    },
    //create
    [create.pending]: (state) => {
      state.cargando = true
    },
    [create.fulfilled]: (state, { payload }) => {
      state.cargando = false
      state.libros = [...state.libros, payload.libro]
    },
    [create.rejected]: (state) => {
      state.cargando = true
    },
    //update
    [update.pending]: (state) => {
      state.cargando = true
    },
    [update.fulfilled]: (state, { payload }) => {
      const index = state.libros.findIndex(
        (libro) => libro.id === payload.libro.id
      )
      state.libros[index] = payload.libro
      state.cargando = false
    },
    [update.rejected]: (state) => {
      state.cargando = true
    },
    //deleteById
    [deleteById.pending]: (state) => {
      state.cargando = true
    },
    [deleteById.fulfilled]: (state, { payload }) => {
      state.libros = [
        ...state.libros.filter((libro) => libro.id !== payload.libro.id),
      ]
      state.cargando = false
    },
    [deleteById.rejected]: (state) => {
      state.cargando = true
    },
  },
})

export const { cambiarCargando } = librosSlice.actions

export default librosSlice.reducer