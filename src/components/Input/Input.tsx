import { FC, useState } from 'react';
import useTextInput from '../../hooks/useTextInput';

export interface InputProps {
  fieldName: string;
  value: string;
  type?: string;
  isRequired?: boolean;
  placeholder?: string;
  checkCondition?: (value: string) => boolean;
}

const Input = (props: InputProps) => {
  const [condition, setCondition] = useState(true);
  const blurHandle = (value: string) => {
    if (props.checkCondition) {
      console.log(props.checkCondition(value));
      setCondition(props.checkCondition(value));
    }
  }
  const name = useTextInput({
    props
  });



  return (
    <fieldset>
      <legend>
        {condition.toString()}
      </legend>
      <input {...name} onBlur={() => blurHandle(name.value)}/>
    </fieldset>
  );
};

export default Input;
