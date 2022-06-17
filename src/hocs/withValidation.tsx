import { WithValidation } from '../ts/interfaces';

const withValidation = ({ Component, checker, value }: WithValidation) => {
  if (checker && !checker.validatorFunction(value)) {
    return (
      <div
        style={{
          padding: '10px',
          backgroundColor: checker.validatorFunction(value) ? 'green' : 'red',
        }}
      >
        {Component}
        <span>{checker.message}</span>
      </div>
    );
  }

  return (
    <div style={{ padding: '10px', backgroundColor: 'green' }}>{Component}</div>
  );
};

export default withValidation;
