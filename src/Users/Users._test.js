import React from "react"
import { Users } from './Users'
import { render, screen, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import axios from 'axios'




jest.mock('axios');

const fakeUsers = [{
    "id": 1,
    "name": "Test User 1",
    "username": "testuser1",
}, {
    "id": 2,
    "name": "Test User 2",
    "username": "testuser2",
}];

describe('App component', () => {
    test('it renders', async () => {
        axios.get.mockResolvedValue({ data: fakeUsers });
        render(<Users />);
        expect(screen.getByText('Users:')).toBeInTheDocument();
    });

    test('it displays a list of users', async () => {
        axios.get.mockResolvedValue({ data: fakeUsers });
        render(<Users />);


        const userList = await waitFor(() => screen.getByTestId('user-list'));
        expect(userList).toBeInTheDocument();
    });

    test('it displays a row for each user', async () => {
        axios.get.mockResolvedValue({ data: fakeUsers });
        render(<Users />);


        const userList = await waitFor(() => screen.findAllByTestId('user-item'));
        expect(userList).toHaveLength(2);
    });
});