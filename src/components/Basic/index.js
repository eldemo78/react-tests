import React from "react";

const Basic = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (e) => {
    setValue(e.target.value)
  };

  return (
    <div data-testid='inputWrapper'>
        <input data-testid='inputElement' onChange={handleChange} placeholder="enter text" value={value}/>
    </div>
  );
};

export default Basic;
