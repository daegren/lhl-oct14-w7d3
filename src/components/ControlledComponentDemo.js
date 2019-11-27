import React from "react";
import useControlledComponent from '../hooks/useControlledComponent'

const ControlledComponentDemo = () => {
  const [name, resetName, onNameChange] = useControlledComponent('')
  const [email, resetEmail, onEmailChange] = useControlledComponent('')

  return (
    <div>
      <input type="text" value={name} onChange={onNameChange} />
      <input type="text" value={email} onChange={onEmailChange} />

      <button onClick={() => { resetName(); resetEmail() }}>Reset</button>
    </div>
  );
}

export default ControlledComponentDemo;
