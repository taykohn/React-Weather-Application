
export const GET_RANDOM_NUMBERS = 'GET_RANDOM_NUMBERS';

export function getRandomNumbers() {
    // const payload = Math.floor(Math.random() * (100));
    const payload = {
        colorValue: Math.floor(Math.random() * (100)),
        knobValue: Math.floor(Math.random() * (100)),
        airTemp: Math.floor(Math.random() * (100)),
        waterTemp: Math.floor(Math.random() * (100)),
        humidity: Math.floor(Math.random() * (100))
    };
    
    return {
        type:GET_RANDOM_NUMBERS,
        payload: payload
    };
}
