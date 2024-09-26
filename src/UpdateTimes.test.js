import { updateTimes } from './utils';
import { fetchAPI } from './api';

jest.mock('./api', () => ({
    fetchAPI: jest.fn(),
}));

describe('updateTimes', () => {
    beforeEach(() => {
        fetchAPI.mockClear();
    });

    test('fetches new times for a selected date', async () => {
        const selectedDate = new Date('2024-01-01');
        fetchAPI.mockResolvedValueOnce(['5:00 PM', '6:00 PM', '7:00 PM']);

        const result = await updateTimes(selectedDate);

        expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
        expect(result).toEqual(['5:00 PM', '6:00 PM', '7:00 PM']);
    });
});