import withValidation from '../../hocs/withValidation';
import useInput from '../../hooks/useInput';
import { InputProps } from '../../ts/interfaces';

const Input = ({ value, checker }: InputProps) => {
  const name = useInput({
    initialValue: value,
  });

  if (checker) {
    return withValidation({
        checker,
        value: name.value,
        Component: <input {...name} />
    });
  }

  return <input {...name} />;
};

export default Input;
