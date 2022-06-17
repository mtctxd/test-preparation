import Input from '../Input/Input';

import style from './UserForm.module.css';

function UserForm() {
  const checkLength = (value: string) => value.trim().length > 3;

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
    </div>
  );
}

export default UserForm;
