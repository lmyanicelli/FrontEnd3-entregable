import React from 'react';
import Opciones from '../components/Opciones';
import Recordatorio from '../components/Recordatorio';
import data from '../components/data.json';
import Swal from 'sweetalert2';


let seleccionActual = "1";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 1,
      historia: '',
      opciones: {},
      seleccionAnterior: '',
      historial: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      historia: data[0].historia,
      opciones: data[0].opciones,
    });
  }


  handleClick(opcionLetra) {
    //incremento el contador para determinar la selección correspondiente
    let seleccionNumero = this.state.contador + 1;
    //actualizo la opción seleccionada
    seleccionActual = seleccionNumero + opcionLetra;

    //busco la historia siguiente en el array data.json
    let historiaSiguiente = data.find((element) => element.id === seleccionActual);

    //Compruebo si existe una próxima historia
    if (historiaSiguiente) {
      //Al existir una próxima historia, actualizo el estado con los valores correspondientes
      this.setState({
        contador: this.state.contador + 1,
        seleccionAnterior: opcionLetra.toUpperCase(),
        historia: historiaSiguiente.historia,
        opciones: historiaSiguiente.opciones,
        //Si existe una selección anterior, actualizo el historial
        historial: this.state.seleccionAnterior !== ''? [...this.state.historial, this.state.seleccionAnterior] : [],
      })
   
    } else {
      //Fin de la historia
      //Lanza mensaje de finalización y pregunta si quiere volver a empezar
      Swal.fire({
        title: 'FIN',
        text: "¿Querés volver a empezar?",
        showCancelButton: true,
        cancelButtonText: 'No',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
          //Inicializo de nuevo los datos para volver a empezar
          this.setState({
            contador: 1,
            historia: data[0].historia,
            opciones: data[0].opciones,
            seleccionAnterior: '',
            historial: [],
          })
        }
      })
      
    }

  }


  render() {
    return (
        <div className="layout">
          <h1 className="historia">{this.state.historia}</h1>
          <Opciones opciones={this.state.opciones} handleClick={this.handleClick} />
          <Recordatorio seleccionAnterior={this.state.seleccionAnterior}
            historial={this.state.historial} />
        </div>
    );
  }
}

export default App;