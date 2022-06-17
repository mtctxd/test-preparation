import React from 'react';
import useInput from '../../hooks/useInput';

interface Props {
  value: string;
}

const Input = ({ value }: Props) => {
  const name = useInput({
    initialValue: value,
  });

  return <input {...name} />;
};

export default Input;
