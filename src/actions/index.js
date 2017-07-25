import axios from 'axios';

const ROOT_URL = `http://f2cca9a3.ngrok.io`;

export const GET_PANEL_VALUES = 'GET_PANEL_VALUES';

export async function getPanelValues() {
    const url = `${ROOT_URL}/all`
    let request = await axios.get(url);

    console.log("Request: ", request);
 
    const payload = {
        airTemp: request.data[0].value,
        waterTemp: request.data[1].value,
        humidity: request.data[2].value,
        colorValue: request.data[3].value,
        knobValue: request.data[4].value
    };

    return {
        type:GET_PANEL_VALUES,
        payload: payload
    };
}
