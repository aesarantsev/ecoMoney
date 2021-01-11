import React from "react";

interface IErrorProps {
    children: any
}

const Error: React.FC<any> = ({ children }) => {
  return (
    <div className='error'>
      <b>*{children}</b>
    </div>
  );
}

export default Error