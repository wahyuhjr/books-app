import React from 'react'

const Input = (props) => {
    const{type, placeholder, name} = props;
  return (
    <input
        type={type}
        className="rounded-lg py-2 px-5 shadow-md w-full"
        placeholder={placeholder}
        name={name}
    />
  )
}

export default Input;