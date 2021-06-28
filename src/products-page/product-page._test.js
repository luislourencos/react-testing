// 1- crear un test que falle
// 2- lo minimo necessario para que el teste passe
// 3- Refactors
import React from 'react';
import { screen, render } from '@testing-library/react';
import { ProductPage } from '.'

beforeEach(() => render(<ProductPage />))
describe('ProductPage', () => {
    it('must display a title', () => {
        expect(screen.queryByText(/hola mundo/i)).toBeInTheDocument();
    })
    it('must display a product name Carrito', () => {
        expect(screen.queryByText(/carrito/i)).toBeInTheDocument();
    })
})