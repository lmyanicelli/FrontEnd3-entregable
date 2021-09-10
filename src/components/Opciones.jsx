import React from 'react';

export default class Opciones extends React.Component {
    render() {
        return (
            <div className="opciones">
                {
                    //Recorre el objeto y renderiza las opciones indicando letra y texto
                    Object.keys(this.props.opciones).map((opcionLetra, i) => {
                        return (
                            <div className="opcion" key={i.toString()}>
                                <button className="botones" onClick={() => this.props.handleClick(opcionLetra)}>
                                    {opcionLetra.toUpperCase()}
                                </button>
                                <h2 >{this.props.opciones[opcionLetra]}</h2>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}