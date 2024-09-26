import { fetchAPI } from './api';

export const initializeTimes = async () => {
    const times = await fetchAPI();
    return times;
};

export const updateTimes = async (date) => {
    const times = await fetchAPI(date);
    return times;
};