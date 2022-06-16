import { ChangeEvent, useState } from 'react';
import { InputProps } from '../components/Input/Input';

interface Props {
  props: InputProps;
}

const useTextInput = ({ props }: Props) => {
  const { type = 'text', placeholder, fieldName, value } = props;
  const [inputValue, setInputValue] = useState(value);

  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  

  return {
    type,
    value: inputValue,
    placeholder: placeholder || `Enter ${fieldName}`,
    onChange: changeValue,
  };
};

export default useTextInput;
