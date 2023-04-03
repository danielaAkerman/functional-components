import React from "react";

type propsDeComp2 = {
  children: any;
  texto: string;
  onEvento: () => any;
};

function Comp2(props: propsDeComp2) {
  const nuevoTexto = props.texto.replaceAll(" ", "-");
  return <div onClick={props.onEvento}>Componente 2 {nuevoTexto}</div>;
}

class Comp1 extends React.Component<any, any> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Comp1>Componente 1</Comp1>
        <Comp2
          texto="Dani R Akerman"
          onEvento={() => console.log("Me hicieron click")}
        >
          Children
        </Comp2>
      </div>
    );
  }
}
