import React, { Component } from 'react';
import CardDetail from './cardDetail';
import { connect } from 'react-redux';


class CardList extends Component {

    render() {
        const { colorValue, knobValue, airTemp, waterTemp, humidity } = this.props;
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <CardDetail title="Color" value={colorValue} />
                            </td>
                            <td>
                                <CardDetail title="Knob Value" value={knobValue}/>
                            </td>
                            <td>
                                <CardDetail title="Air Temp" value={airTemp}/>
                            </td>
                            <td>
                                <CardDetail title="Water Temp" value={waterTemp}/>
                            </td>
                            <td>
                                <CardDetail title="Humidity" value={humidity}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        colorValue: state.panels.colorValue,
        knobValue: state.panels.knobValue,
        airTemp: state.panels.airTemp,
        waterTemp: state.panels.waterTemp,
        humidity: state.panels.humidity
    };
}


export default connect(mapStateToProps)(CardList);
