import Input from '../Input/Input';

import style from './UserForm.module.css';

function UserForm() {
  const checkLength = (value: string) => value.trim().length > 3;
  const checkIfNumber = (value: string) => !isNaN(Number(value.trim()));
  const checkIfFilled = (value: string) => value.trim().length > 0;

  return (
    <div className={style.container}>
      <Input
        value="Harry"
        checker={{
          message: 'length should be > 3',
          validatorFunction: checkLength,
        }}
      />
      <Input
        value="Potter"
        checker={{
          message: 'length should be > 3',
          validatorFunction: checkLength,
        }}
      />
      <Input
        value="Zhora"
        pageTitleChange
      />
      <Input
        value="123з"
        checker={{
          message: 'only numbers allowed',
          validatorFunction: checkIfNumber,
        }}
      />
      <Input
        value=""
        checker={{
          message: 'should be filled',
          validatorFunction: checkIfFilled,
        }}
      />
    </div>
  );
}

export default UserForm;
