import React from "react";

export const Counter = (props) => {
   const [count, setCount] = React.useState(0);

  const handleIncrement = (a) => {
    setCount(count + a);
  };

  return (
    <>
      <h1>Counter</h1>
      <h1 style={ count % 2 == 0 ? {color: 'green'} : {color:"red"} } >{count}</h1>
      <button
        onClick={() => {
          handleIncrement(props.inc);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          handleIncrement(props.dec);
        }}
      >
        Reduce
      </button>

      <button onClick={()=>{handleIncrement(props.double)}}>Double</button>
    </>
  );
};
