import React from "react";

type propsDeComp2 = {
  children: any;
  nombre: string;
  onEvento: (any) => any;
};

function Comp2(props: propsDeComp2) {
  return <div onClick={props.onEvento}>Hola soy com2222222 {props.nombre}</div>;
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
        <Comp1>Holaaaaaa soy comp1</Comp1>
        <Comp2 nombre="Dani" onEvento={(p) => console.log("Me hicieron click",p)}>
          Children
        </Comp2>
      </div>
    );
  }
}
