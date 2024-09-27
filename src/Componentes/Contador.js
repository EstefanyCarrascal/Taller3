import React from "react";

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contador: 100};
    }
    componentDidMount() {
        console.log("El componente se ha montado");
    }
    decrementar = () => {
        this.setState({contador: this.state.contador - 1});
    };
    componentDidUpdate() {
        console.log("El componente se ha actualizado");
    };
    componentWillUnmount() {
        console.log("El componente se ha desmontado");
    };

    render() {
        return(
            <div>
                <h2>Contador: {this.state.contador}</h2>
            <button onClick={this.decrementar}>Decrementar</button>
            </div>
        );
    }
}

export default Contador;