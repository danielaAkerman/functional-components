import React from "react";

type TextFieldProps = {
  label: string;
  type: string;
  name: string;
};
export function TextField(props) {
  return (
    <label>
      <h4>{props.label}</h4>
      <input type={props.type} name={props.name} />
    </label>
  );
}
