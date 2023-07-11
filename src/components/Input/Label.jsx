import React from 'react'

const Label = (props) => {
    const{name, children} = props;
  return (
    <label className="font-bold" htmlFor={name}>
        {children}
    </label>
  )
}

export default Label;