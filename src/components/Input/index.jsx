import React from 'react'
import Label from './label';
import Input from './input';


const InputForm = (props) => {
    const{name, label, placeholder,type} = props;
  return (
    <div className="mb-2">
        <Label htmFor = {name}>{label}</Label>
        <Input name = {name} type = {type}  placeholder={placeholder}/>
    </div>
  )
}

export default InputForm;