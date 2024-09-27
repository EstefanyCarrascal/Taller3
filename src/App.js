import React from "react";
import Contador from "./Componentes/Contador";
import Mensajes from "./Componentes/Mensajes";


//Ejercicio1 Contador simple
// class ContadorI extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { contador: 0};
//   }
//   incrementar = () => {
//     this.setState({contador: this.state.contador + 1});
//   };
//   render() {
//     return (
//       <div>
//         <p> {this.state.contador}</p>
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     );
//   }
// }
// export default ContadorI;

//Ejercicio2 Ciclo de vida de un componente
// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {mostrarcontador: true};
//   }
//   toggleContador = () =>{
//     this.setState({mostrarcontador: !this.state.mostrarcontador});
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.toggleContador}>{this.state.mostrarcontador? "Desmonstar Contador": "Montar Contador"}</button>
//       {this.state.mostrarcontador &&<Contador/>}
//       </div>
//     );
//   }
// }
// export default App;


//Ejercicio3 Componente Opcional
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={mostrarMensaje: true};
//   }
//   toggleComponente=() => {
//     this.setState((prevState) => ({
//       mostrarMensaje: !prevState.mostrarMensaje,
//     }));
//   };
//   render(){
//     return(
//       <div>{}
//         {}
//         <button onClick={this.toggleComponente}>
//           {}
//           {this.state.mostrarMensaje ? "Ocultar Mensaje":"Mostrar Mensaje"}
//         </button>
//         {}
//         {this.state.mostrarMensaje&&<Mensajes/>}
//       </div>
//     )
//   }
// }
// export default App;