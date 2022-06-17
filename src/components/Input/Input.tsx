import withValidation from '../../hocs/withValidation';
import useChanegTitle from '../../hooks/useChangeTitle';
import useInput from '../../hooks/useInput';
import { InputProps } from '../../ts/interfaces';

const Input = ({ value, checker, pageTitleChange }: InputProps) => {
  const name = useInput({
    initialValue: value,
  });

  useChanegTitle(pageTitleChange, name.value);

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
