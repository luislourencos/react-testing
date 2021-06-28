import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonColor, replaceCamelWithSpaces } from './ButtonColor';

describe('Testing Button Color', () => {
    let button;
    let checkbox;
    let info;
    beforeEach(() => {
        render(<ButtonColor />)
        button = screen.getByRole('button', { name: /change to Midnight Blue/i })
        checkbox = screen.getByRole('checkbox', { name: "disable button" })
        info = screen.getByText(/info/i)
    })

    test('button has correct initial color', () => {
        expect(button.textContent).toBe("Change to Midnight Blue")
        expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" })
    })

    test('button turns MidnightBlue when clicked', () => {
        fireEvent.click(button);
        expect(button.textContent).toBe("Change to Medium Violet Red")
        expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" })
    })

    test('checkbox tensting on in initial state', () => {
        expect(checkbox).not.toBeChecked()
        expect(info.textContent).toBe('info disable')
    })
    test('checkbox tensting off when clicked', () => {
        fireEvent.click(checkbox)
        expect(checkbox).toBeChecked()
        expect(info.textContent).toBe('info checked')
    })
    test('checkbox tensting click and ...', () => {
        fireEvent.click(checkbox)
        expect(checkbox).toBeChecked()

        fireEvent.click(checkbox)
        expect(checkbox).not.toBeChecked()
        fireEvent.click(checkbox)
        expect(checkbox).toBeChecked()

    })
    test("initial state disable-button gray-enable button-MediumVioletRed", () => {
        expect(checkbox).not.toBeChecked()
        fireEvent.click(checkbox)
        expect(button).toHaveStyle({ backgroundColor: "silver" })
        fireEvent.click(checkbox)
        expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

    })

    test('click button to change color- disable btoon - button is gray', () => {
        expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
        fireEvent.click(button)
        expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })
        fireEvent.click(checkbox)
        expect(button).toHaveStyle({ backgroundColor: 'silver' })
        fireEvent.click(checkbox)
        expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })
    })


})

//Medium Violet MediumVioletRed
//Midnight MidnightBlue
describe('teste function replaceCamelWithSpaces', () => {
    test('works for no inner capital letter', () => {
        expect(replaceCamelWithSpaces('Red')).toBe('Red')
    })
    test('works for one inner capital letter', () => {
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe('Midnight Blue')
    })
    test('works for multiple inner capital letters', () => {
        expect(replaceCamelWithSpaces("MediumVioletRed")).toBe('Medium Violet Red')
    })
})