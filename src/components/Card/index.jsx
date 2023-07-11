import React from 'react';

const Card = (props) => {
  return (
    <div className={`rounded-xl ${props.txtColor} ${props.bgColor} bg-opacity-10 p-5 w-40 h-40`}>
        {props.icon}
        {props.label}
    </div>  
  );
};

export default Card;