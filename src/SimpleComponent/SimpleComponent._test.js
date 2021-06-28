import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { SimpleComponent } from './SimpleComponent';


describe('testing my dummy component', () => {
    let title;
    let description;
    let button;
    let count;
    beforeEach(() => {
        render(<SimpleComponent />)
        title = screen.getByText(/my first test/i)
        description = screen.getByText(/I am testing react/i)
        button = screen.getByText(/click to count/i)
        count = screen.getByTestId("count")
    })

    test('have all elements', () => {
        expect(title).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        expect(button).toBeInTheDocument()
        expect(count.textContent).toBe("0")
    })
    test('have click and add', () => {
        expect(count.textContent).toBe("0")
        fireEvent.click(button)
        expect(count.textContent).toBe("1")

        for (let i = 0; i < 100; i++) {
            fireEvent.click(button)
        }
        expect(count.textContent).toBe("101")
    })

    afterAll(() => {
        cleanup()
    })
})