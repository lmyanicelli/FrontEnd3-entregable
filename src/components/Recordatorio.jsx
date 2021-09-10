import React from 'react';

class Recordatorio extends React.Component {
    render() {
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.seleccionAnterior}</h3>
                <h3>Historial de opciones elegidas:</h3>
                <ul>
                    {this.props.historial.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Recordatorio;