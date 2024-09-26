import { initializeTimes } from './utils';
import { fetchAPI } from './api';

jest.mock('./api', () => ({
    fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
    beforeEach(() => {
        fetchAPI.mockClear();
    });

    test('fetches available booking times and updates state', async () => {
        fetchAPI.mockResolvedValueOnce(['12:00 PM', '1:00 PM', '2:00 PM']);

        const result = await initializeTimes(new Date('2024-01-01'));

        expect(fetchAPI).toHaveBeenCalledTimes(1);
        expect(result).toEqual(['12:00 PM', '1:00 PM', '2:00 PM']);
    });
});