import React from 'react';
import { screen, render, fireEvent, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { Counter } from './Counter';

let getByTestId;

beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId
})

afterEach(() => {
    cleanup()
})

test('Render Counter correctly', () => {
    const headerId = getByTestId("header");
    expect(headerId.textContent).toBe("My Counter");
})

test('Counter initially start with text of 0', () => {

    const countElement = getByTestId('counter')

    expect(countElement.textContent).toBe('0')
})
test('Input contain initially value of 1 ', () => {

    const inputElement = getByTestId('input');

    expect(inputElement.value).toBe('1');
})
test('Add button renders with + ', () => {

    const addElement = getByTestId('add');

    expect(addElement.textContent).toBe('+');
})
test('Add button renders with - ', () => {

    const subElement = getByTestId('sub');

    expect(subElement.textContent).toBe('-');
})
test('Change value of input works correctly ', () => {

    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    })

    expect(inputElement.value).toBe("5")
})
test('Clicking on plus button add 1 to counter', () => {

    const addElement = getByTestId('add');
    const counterElement = getByTestId('counter');
    expect(counterElement.textContent).toBe('0')
    fireEvent.click(addElement);

    expect(counterElement.textContent).toBe('1')
})

test('Clicking on sub button add 1 to counter', () => {

    const subElement = getByTestId('sub');
    const counterElement = getByTestId('counter');
    expect(counterElement.textContent).toBe('0')
    fireEvent.click(subElement);

    expect(counterElement.textContent).toBe('-1')
})
test('Change on input value and then clicking add btn works correcly', () => {

    const addElement = getByTestId('add');
    const inputElement = getByTestId('input');
    const counterElement = getByTestId('counter');
    expect(counterElement.textContent).toBe('0')

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addElement);

    expect(counterElement.textContent).toBe('5')
})
test('Change on input value and then clicking sub btn works correcly', () => {

    const subElement = getByTestId('sub');
    const inputElement = getByTestId('input');
    const counterElement = getByTestId('counter');
    expect(counterElement.textContent).toBe('0')

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subElement);

    expect(counterElement.textContent).toBe('-5')
})
test("Adding and then substrating leads to the correct counter number", () => {

    const subElement = getByTestId('sub');
    const addElement = getByTestId('add')
    const inputElement = getByTestId('input');
    const counterElement = getByTestId('counter');

    expect(counterElement.textContent).toBe('0')

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    })
    fireEvent.click(addElement);
    fireEvent.click(addElement);

    expect(counterElement.textContent).toBe('10');
    fireEvent.click(subElement);
    fireEvent.click(subElement);
    fireEvent.click(subElement);
    expect(counterElement.textContent).toBe('-5');
})

test('counter contains correct className', () => {

    const counterElement = getByTestId("counter");

    expect(counterElement.className).toBe("")

    const subElement = getByTestId('sub');
    const addElement = getByTestId('add')
    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, {
        target: {
            value: "90"
        }
    })
    expect(counterElement.className).toBe("")
    fireEvent.click(addElement);
    expect(counterElement.className).toBe("")
    fireEvent.click(addElement);
    expect(counterElement.className).toBe("green")

    fireEvent.click(subElement);
    expect(counterElement.className).toBe("")
    fireEvent.click(subElement);
    expect(counterElement.className).toBe("")
    fireEvent.click(subElement);
    expect(counterElement.className).toBe("")
    fireEvent.click(subElement);
    expect(counterElement.className).toBe("red")
})