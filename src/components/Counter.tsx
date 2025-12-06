import { createSignal, type Component, type JSX } from "solid-js";

interface Props {
  initialValue: number;
  children?: JSX.Element; //aceptar el children como en react
}
// DESTRUCTURAR EL OBJETO PROPS HACE QUE SE PIERDA LA REACTIVIDAD DE SOLID-JS
export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initialValue);

  return (
    <>
      {props.children}
      <h1>Counter</h1>

      <h3>Value: {counter()} </h3>

      <button onclick={() => setCounter((prevState) => prevState + 1)}>
        +1
      </button>
      <button onclick={() => setCounter((prevState) => prevState - 1)}>
        -1
      </button>
    </>
  );
};
